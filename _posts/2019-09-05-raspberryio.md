---
author: "Carlos Solorzano"
layout: post
title: "RaspberryIO - Getting started"
date: 2019-09-05
area: "blog"
description: An easy-to-use open-source API to bring the .NET power to the python-centered Raspberry Pi development world.
tags: Raspberry RaspberryIO IoT API .NET
---

[RaspberryIO](https://github.com/unosquare/raspberryio/) is an easy-to-use open-source API to bring the .NET power to the python-centered Raspberry Pi development world.
​
RaspberryIO enables developers to use the various Raspberry Pi's hardware modules including the Camera to capture images and video, the GPIO pins, and both SPI and I2C buses.
​
RaspberryIO works as a high-level wrapper for low-level libraries that interacts directly with the Raspberry Pi hardware, as a result, several implementations could be done, targeting distinct low-level libraries. By now, we have fully implemented the [WiringPi](https://github.com/unosquare/wiringpi-dotnet/) library and we are working in the [PiGpio](https://github.com/unosquare/pigpio-dotnet/) implementation.
​
## Using RaspberryIO
​
On this initial post, we are going to create a new console project to obtain general system information, deploying the project to the Raspberry Pi and finally run the application using .Net Core.
​
### Create the project
​
 - Open Visual Studio and create a new Console App project.
 - Add the [RaspberryIO](https://www.nuget.org/packages/Unosquare.Raspberry.IO) nuget package. This library Contains classes to control general Raspberry Pi modules like Camera, Audio, Network and classes to get general system information.
	```
	PM> Install-Package Unosquare.Raspberry.IO
	```
- Add the code to get general system information:
	```csharp
	using System;
	using Unosquare.RaspberryIO;
​
	class Program
	{
	    static void Main(string[] args)
	    {
	        Console.WriteLine(Pi.Info);
	        Console.ReadLine();
	    }
	}
	```
**_Unosquare.RaspberryIO.Pi_** is your access point to the API. Through this static class you can access all API features. The **_Info_** property provides access to the **_SystemInfo_** class, this class allows you to obtain different system information, like board model, board revision, processor model, memory size, operating system, etc. In the above code, we are writing to the console the **_SystemInfo_** class, which _ToString_ overload is going to get the most common system information, nevertheless, you can access individual **_SystemInfo_**'s properties to get more specific and useful information.
​
_Note_: In future blog entries we are going to explore more features of the **_Pi_** class, like **_Gpio_** that allow access to the General Purpose Input/Output pins.
​
### Deploy to Raspberry Pi
​
To deploy you application to the Raspberry you have two options:
​
 1. Publish  your project from VS and then copying all the published files to the Raspberry using some FTP tool like [FileZilla](https://filezilla-project.org/).
 2. Use a tool that publishes the project and copy the files to the Raspberry automatically, like [sshdeploy](https://github.com/unosquare/sshdeploy).
​
For this tutorial, we are going to use **_sshdeploy_**, a CLI utility that enables quick deployments over SSH. This app was specifically designed to streamline .NET application development for the Raspberry Pi.
​
To install sshdeploy, open windows command prompt and run the next command:
```bash
dotnet tool install -g dotnet-sshdeploy
```
Add the next basic configuration to your csproj file:
```xml
<PropertyGroup>
	<OutputType>Exe</OutputType>
	<TargetFramework>netcoreapp2.2</TargetFramework>
	<RuntimeIdentifier>linux-arm</RuntimeIdentifier>
	<SelfContained>false</SelfContained>
	<SshDeployClean />
	<SshDeployHost>192.168.1.100</SshDeployHost>
	<SshDeployUsername>pi</SshDeployUsername>
	<SshDeployPassword>raspberry</SshDeployPassword>
	<SshDeployTargetPath>/home/pi/demo</SshDeployTargetPath>
</PropertyGroup>
```
*Note 1*: To use **_sshdeploy_**, SSH must be enabled in the Raspberry Pi. To enable SSH in the Raspberry Pi follow this [tutorial](https://www.raspberrypi.org/documentation/remote-access/ssh/).
*Note 2*: You must use your actually Raspberry Pi IP address, user and password.
​
Finally, to actually deploy the app to the Raspberry Pi, open windows command prompt, navigate to the path where the csproj file is and run the next command:
​
```bash
dotnet-sshdeploy push -c Release
```
​
The utility will publish the app and then will copy the required files to the specified path (_SshDeployTargetPath_).
​
### Run the app
​
In order to run the application you need to install .NET Core **SDK** or **runtime**. The software development kit (**SDK**) includes everything you need to build and run .NET Core applications, using command line tools and any editor (including Visual Studio). The **runtime** includes just the resources required to run existing .NET Core applications. The **runtime** is included in the **SDK**.
​
Since we only need to run an existing application on the Raspberry Pi, we are going to install only the .NET Core **runtime**.
​
To install .NET Core **runtime** execute the following commands:
```
$ sudo apt-get -y update
$ sudo apt-get -y install libunwind8 gettext
$ wget https://download.visualstudio.microsoft.com/download/pr/428aaa32-f66c-4847-b845-aa21f90504e4/1cf033db866414997140c2672bd75069/dotnet-runtime-2.2.6-linux-arm.tar.gz
$ sudo mkdir /opt/dotnet
$ sudo tar -xvf dotnet-runtime-2.2.6-linux-arm.tar.gz -C /opt/dotnet/
$ sudo ln -s /opt/dotnet/dotnet /usr/local/bin
​
```
This will install the latest version of .NET Core (2.2.6 at the moment). To verify the version of .NET Core run `dotnet --info`, you will see something like the next info message:
​
```
Host (useful for support):
  Version: 2.2.6
  Commit:  7dac9b1b51
​
.NET Core SDKs installed:
  No SDKs were found.
​
.NET Core runtimes installed:
  Microsoft.NETCore.App 2.2.6 [/opt/dotnet/shared/Microsoft.NETCore.App]
​
To install additional .NET Core runtimes or SDKs:
  https://aka.ms/dotnet-download
```
​
_Note_: To check for newer versions of the .NET Core runtime (or SDK) visit [https://aka.ms/dotnet-download](https://aka.ms/dotnet-download).
​
Finally, navigate to the path where you publish your application and run it using the next command:
```bash
$ dotnet GettingStarted.dll
```
​
You will see some basic system information, something like this:
```
System Information
        LibraryVersion        :
        RaspberryPiVersion    : Pi3ModelBPlusSony
        BoardRevision         : 0
        ProcessorCount        : 4
        InstalledRam          : 971063296
        IsLittleEndian        : True
        ModelName             : ARMv7 Processor rev 4 (v7l)
        Features              : half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 lpae evtstrm crc32
        CpuImplementer        : 0x41
        CpuArchitecture       : 7
        CpuVariant            : 0x0
        CpuPart               : 0xd03
        CpuRevision           : 4
        Hardware              : BCM2835
        Revision              : a020d3
        RevisionNumber        : 3
        Serial                : 00000000299744e5
        UptimeTimeSpan        : 00:50:29.9800000
```
​
That’s all for this basic example. This was your first contact with **RaspberryIO**. In future blog entries, we are going to see more examples to go deeper in the API, using more hardware-related features, like the GPIO, the basic means to the Raspberry Pi to communicate with external devices.