const{distros:distros}=require("./distro"),pms={APK:{install:"apk add",update:"apk update",uninstall:"apk del",search:"apk search"},APT:{install:"apt-get install -y",update:"apt-get update -y",uninstall:"apt-get remove -y",search:"apt-cache search"},DNF:{install:"dnf install -y",update:"dnf update -y",uninstall:"dnf remove -y",search:"dnf search"},NIX:{install:"nix-shell -p",update:"nix-channel --update",uninstall:"nix-store --delete",search:"nix search"},PACMAN:{install:"pacman -S --noconfirm",update:"pacman -Syu --noconfirm",uninstall:"pacman -R --noconfirm",search:"pacman -Ss"},SCOOP:{install:"scoop install",update:"scoop update",uninstall:"scoop uninstall",search:"scoop search"},YUM:{install:"yum install -y",update:"yum update -y",uninstall:"yum remove -y",search:"yum search"},ZYPPER:{install:"zypper -n install",update:"zypper -n update",uninstall:"zypper -n remove",search:"zypper search"}},getPackageManager=(s,a="install",e)=>{switch(s){case distros.WINDOWS:return pms.SCOOP[a];case distros.ORACLE:return 1*e>=8||!e?pms.DNF[a]:pms.YUM[a];case distros.ALPINE:return pms.APK[a];case distros.ARCH:return pms.PACMAN[a];case distros.FEDORA:return 1*e>=22||!e?pms.DNF[a]:pms.YUM[a];case distros.AMAZON_AMI:case distros.AMAZON:case distros.CENTOS:case distros.RHEL:return pms.YUM[a];case distros.SUSE_LEAP:case distros.SUSE_TUMBLEWEED:return pms.ZYPPER[a];case distros.NIXOS:return pms.NIX[a];case distros.UBUNTU:default:return pms.APT[a]}};module.exports={packageManagers:pms,getPackageManager:getPackageManager};