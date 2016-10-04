let fs = require('fs');


function gitTemp(account,ps,msg) {
    return `#!/usr/bin/expect

log_user 0

set timeout 10

set param [lindex $argv 0]

if { $param eq "" } {
	set param "${msg}"
}

exec git add .

exec git commit -m "$param"

puts "connect to github"

spawn git push
expect {
	"Username*" { send "${account}\\n" }
}
expect {
	"Password*" { send "${ps}\\n" }
}
send_user "finish"

interact

    `;
}

exports.output = function (account,ps,msg) {
    if(!msg) msg = "ok";
    fs.writeFile('./gitpush.sh',gitTemp(account,ps,msg),{
        mode:0o755
    },(err)=>{
        if(err) throw new Error(err);
        console.log('finish!');
    })
}