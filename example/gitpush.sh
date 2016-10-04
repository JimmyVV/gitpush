#!/usr/bin/expect

log_user 0

set timeout 10

set param [lindex $argv 0]

if { $param eq "" } {
	set param "ok"
}

exec git add .

exec git commit -m "$param"

puts "connect to github"

spawn git push
expect {
	"Username*" { send "demo\n" }
}
expect {
	"Password*" { send "123456\n" }
}
send_user "finish"

interact

    