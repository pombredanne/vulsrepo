# VulsRepo #

[![license](https://img.shields.io/github/license/usiusi360/vulsrepo.svg?style=flat-square)](https://github.com/usiusi360/vulsrepo/blob/master/LICENSE.txt)

VulsRepo is visualized based on the json report output in [vuls](https://github.com/future-architect/vuls).


<img src="https://raw.githubusercontent.com/usiusi360/vulsrepo/master/gallery/demo.gif" width="100%">

## Online Demo
http://usiusi360.github.io/vulsrepo/

## Requirements

- [future-architect/Vuls](https://github.com/future-architect/vuls) >= v0.4.0
- Web Browser : Google Chrome or Firefox

## Installation
*A home folder of vuls is explained as /opt/vuls.*

### Step1. Create a json report of vuls

````
$ vuls scan 
$ vuls report -format-json 
````

Output to a JSON files (/opt/vuls/results/)



### Step2. Installation

From now on , executed by a user running the vuls scan.

- Git clone

````
$ cd $HOME
$ git clone https://github.com/usiusi360/vulsrepo.git
````

### Step3. Change the setting of vulsrepo-server

Set Path according to your own environment.

```
$ cd $HOME/vulsrepo/server

$ cp vulsrepo-config.toml.sample vulsrepo-config.toml

$ vi vulsrepo-config.toml
[Server]
rootPath = "/home/vuls-user/vulsrepo"
resultsPath  = "/opt/vuls/results"
serverPort  = "5111"
```

- Do not use the path of the symbolic link for resultsPath

### Step4. Start vulsrepo-server

```
$ pwd
$HOME/vulsrepo/server

$ ./vulsrepo-server 
2017/08/28 11:04:00 main.go:90: INFO: RootPath Load:  /root/work/vulsrepo
2017/08/28 11:04:00 main.go:97: INFO: ResultsPath Load:  /opt/vuls/results
2017/08/28 11:04:00 main.go:66: Start: Listening port: 5111
```

- It is necessary to build by yourself except for Linux 64bit. Please look at the build section.

## Usage ##

Access the browser

````
http://<server-address>:5111
````

## DigestAuth

1. To perform digest authentication, create an authentication file.
```
$ ./vulsrepo-server -h
Usage of ./vulsrepo-server:
  -c string
        AuthFile Path (default "/home/vuls-user/.htdigest")
  -m    make AuthFile
  -r string
        realm (default "vulsrepo_local")
  -u string
        login user (default "vuls")

ex)
$ ./vulsrepo-server -m
Password: ****
AuthFile Path   :  /home/vuls-user/.htdigest
realm           :  vulsrepo_local
login user      :  vuls
2017/08/28 19:11:59 main.go:96: Create Success

```

2. Edit vulsrepo-config.toml.
```
$ vi vulsrepo-config.toml
[Auth]
authFilePath = "/home/vuls-user/.htdigest"
realm = "vulsrepo_local"
```

3. Start vulsrepo-server
```
$ ./vulsrepo-server 
2017/08/28 11:04:00 main.go:90: INFO: RootPath Load:  /home/vuls-user/vulsrepo
2017/08/28 11:04:00 main.go:97: INFO: ResultsPath Load:  /opt/vuls/results
2017/08/28 11:04:00 main.go:105: INFO: AuthFilePath Load:  /home/vuls-user/.htdigest ←※
2017/08/28 11:04:00 main.go:66: Start: Listening port: 5111
```

## Build vulsrepo-server
- It is necessary to build by yourself except for Linux 64bit
- Install golang beforehand.

```
$ mkdir -p $GOPATH/src/github.com/usiusi360/
$ cd $GOPATH/src/github.com/usiusi360/
$ git clone https://github.com/usiusi360/vulsrepo.git
$ cd vulsrepo/server
$ go get -u github.com/golang/dep/...
$ dep ensure
$ go build -o vulsrepo-server
```

## Misc

### SETTING

<img src="https://raw.githubusercontent.com/usiusi360/vulsrepo/master/gallery/image006.png" width="80%">

- Pivot Table

| Setting Name |  |
|:-|:-|
|Show / Hide the Item|Set items not to be displayed on pivot table. Since the data of Summary is very large, it turns OFF when the number of vulnerabilities is large and an error occurs.|
|Priority|Set the data to be displayed with priority in the pivot table.The default is NVD data.|

### Sharing settings

- How to share pivot settings with others

<img src="https://raw.githubusercontent.com/usiusi360/vulsrepo/master/gallery/image007.png" width="80%">

1. Click the link display button on the upper right.
2. Click the copy button to clickboard.
3. Pass the copied URL to another person.
4. When you access the URL in the browser and select the file, the pivot is displayed with the same setting.

### FAQ

- Why does not Total of Vuls and VulsRepo result match ?

Vuls aggregates the number of CveIDs included in the host.
However, VulsRepo counts Packages related to CveID as one case.
If more than one package is associated with one CveID, Total will increase more than Vuls.

<img src="https://raw.githubusercontent.com/usiusi360/vulsrepo/master/gallery/image008.png" width="80%">

## Gallery ##
![image](https://raw.githubusercontent.com/usiusi360/vulsrepo/master/gallery/image001.png)
![image](https://raw.githubusercontent.com/usiusi360/vulsrepo/master/gallery/image002.png)
![image](https://raw.githubusercontent.com/usiusi360/vulsrepo/master/gallery/image003.png)
![image](https://raw.githubusercontent.com/usiusi360/vulsrepo/master/gallery/image004.png)
![image](https://raw.githubusercontent.com/usiusi360/vulsrepo/master/gallery/image005.png)
