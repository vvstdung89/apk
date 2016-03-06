server1="188.166.229.247"

databaseservice_port="10011";

mode="production"

srcFolder=${1%/}
task=$2
desFolder="/home/live"


if [[ "$srcFolder" == DatabaseService ]] ;then
	server=( "$server1" )
	port=$databaseservice_port
else
	echo "Please register project folder or specify in command line "
	exit;
fi

init(){
	copy ${server[@]}
	echo "Init Project ...."
	for i in ${server[@]}
	do
		ssh live@$i "cd ${desFolder}/$srcFolder && npm install"
	done
}

copy(){
	echo "Copy Files ...."
	for i in ${server[@]}
	do
		rsync -avz --exclude $srcFolder/node_modules $srcFolder live@$i:$desFolder
	done
	
}

restart(){	
	echo "Restart service ...."
	for i in ${server[@]}
	do
		ssh live@$i "cd ${desFolder}/$srcFolder && NODE_ENV=${mode} ./run.sh ${port}"
	done
	
}

log(){
	echo "Reading Log File ...."
	for i in ${server[@]}
	do
		ssh live@$i tail -f -n 100 ${desFolder}/$srcFolder/main.log
	done
}

if [ "$task" = "init" ] ;then
	init 
	restart 
elif [ "$task" = "copy" ] ;then
	copy 
	restart 
	log
elif [ "$task" = "restart" ] ;then
	restart 
elif [ "$task" = "log" ] ;then
	log 
else
	echo "[ERROR] Usage: ./sync Project [init |copy|restart|log]"
fi

