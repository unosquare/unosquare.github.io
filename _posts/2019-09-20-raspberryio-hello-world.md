---
author: "Carlos Solorzano"
layout: post
title: "RaspberryIO - Hello World!"
date: 2019-09-20
area: "blog"
description: First interaction with Raspberry Pi GPIO pins.
tags: Raspberry RaspberryIO GPIO IoT API .NET NET.Core
---

## GPIO  
  
[GPIO](https://www.raspberrypi.org/documentation/usage/gpio/) (general-purpose input/output) pins are a powerful feature of the Raspberry Pi that allows it to communicate with the external world.  
  
Through GPIO pins you can interact with physical devices like LEDs, buttons, many kinds of sensors (temperature, humidity, accelerometer, GPS, etc.) or even communicate with other microcontrollers using different communication protocols like I2C or SPI.  
  
[RaspberryIO](https://github.com/unosquare/raspberryio/) provides access to the GPIOs through low-level libraries that interact directly with the Raspberry Pi hardware. We have been working in implementing two mainly libraries:  
  
- [WiringPi](http://wiringpi.com/): Fully implemented library, you can use all the WiringPi functionality through [WiringPi-dotnet](https://github.com/unosquare/wiringpi-dotnet) implementation.  
- [PiGpio](http://abyz.me.uk/rpi/pigpio/): Partially implemented library. We are working in this implementation, nevertheless, you can already use the most characteristics of PiGpio through [PiGpio-dotnet](https://github.com/unosquare/pigpio-dotnet).  
  
## Hello World!  
  
On this second post, we are going to extend the console project we did in the [first post](https://unosquare.github.io/2019/09/05/raspberryio.html), using the GPIO pins for blinking an LED.  
  
### Material  
  
Finally, We are going to get our hands dirty working with some basic electronic components. For this project we are going to need the following bill of material:  
  
- 1 x LED of any color.  
- 1 x 100Ω resistor.  
- 2 x Jumper wires (We recommend Male-Female dupont jumper wires, for easiness).  
- 1 x Breadboard.  
  
### Schematics  
  
You must set up the next schematic (formal representation of the circuit), in order to get the project working as expected.  
  
![Schematics](https://user-images.githubusercontent.com/5455304/65348529-0582f280-dba7-11e9-9576-4c0ddcf7e50a.png)  
  
We are using [fritzing app](http://fritzing.org) which is an open-source initiative that makes electronics accessible for anyone.  
  
You must connect the LED's anode to the BCM 17 pin and the LED's cathode to ground through the resistor. For more information about Raspberry Pi GPIO pinout, follow this [comprehensive guide](https://pinout.xyz).  
  
Here is an image of the breadboard view, a useful fritzing tool where you can view the electronic parts virtually. This tool is especially useful for those who begin with electronics.  
  
![Breadboard](https://user-images.githubusercontent.com/5455304/65348486-ef753200-dba6-11e9-8d3d-8a0d13922df4.png)  
  
### The code  
  
- Open Visual Studio and open the console project we we did in the [first post](https://unosquare.github.io/2019/09/05/raspberryio.html).  
- In order to get the GPIO pins working, we need to add a library implementation. For this project, we are going to be using the WiringPi implementation since it is the library we are tested the most.  
  
  Add the [Unosquare.WiringPi](https://www.nuget.org/packages/Unosquare.wiringpi) nuget package reference to your project. 
  
    ```bash  
    PM> Install-Package Unosquare.WiringPi 
    ```  
  
- Add the next function to the Program class:  
  
    ```csharp  
    static async Task Blink(BcmPin pinNumber, CancellationToken cancellationToken)  
    {  
        var pin = Pi.Gpio[pinNumber];  
        pin.PinMode = GpioPinDriveMode.Output;  
  
        while (!cancellationToken.IsCancellationRequested)  
        {  
            pin.Write(!pin.Value);  
            await Task.Delay(500);  
        }  
  
        pin.Write(false);  
    }  
    ```  
  
  This function expects a **BcmPin** enumeration value, that represents the GPIO pin we will be working with and a **CancellationToken** to finish the task.  
  
- Modify the **Main** function to call the **Blink** function:  
  
    ```csharp  
    static void Main(string[] args)  
    {  
        Pi.Init<BootstrapWiringPi>();  
  
        Console.WriteLine(Pi.Info);  
        // Blink led  
        var tokenSource = new CancellationTokenSource();  
  
        var task = Blink(BcmPin.Gpio17, tokenSource.Token);  
  
        Console.ReadLine();  
        tokenSource.Cancel();  
        task.Wait();  
  }  
  ```  
  
  We need to tell RaspberryIO which underlying library implementation it's going to be using through a bootstrapping process.  
  
    ```csharp  
    Pi.Init<BootstrapWiringPi>()  
    ```  
  
  This process loads all the specific classes needed to work with GPIOs and other hardware-dependent features implemented by the underlying library.  
  
### Deploy and run the app  
  
For [deploy](https://unosquare.github.io/2019/09/05/raspberryio.html#deploy-to-raspberry-pi) and [run](https://unosquare.github.io/2019/09/05/raspberryio.html#run-the-app) the app, follow the instructions from the [first post](https://unosquare.github.io/2019/09/05/raspberryio.html).  
  
Finally, we have our hardware "**Hello World!**", blinking an LED.  
  
![Hello World!](https://user-images.githubusercontent.com/5455304/65348405-b472fe80-dba6-11e9-95f6-da43ff5c612e.gif)
  
That’s all for this example. This was the first contact with Raspberry Pi hardware, generating a simple output. In future blog entries, we are going to see more examples using GPIO for simple inputs.  
