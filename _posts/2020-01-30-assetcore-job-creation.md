---
author: Manuel Santos (@ManuSanRam)
layout: post
title: Easy to create Jobs for your computer assets
date: 2020-01-30
description: Give a specific command to any asset in your organization via Assetcore's job system. Assign not only what jobs to do, but also when to perform them.
tags: inventory assetcore typescript react asset-manager 
---
One of the most time-consuming yet important tasks that any organization has is to keep a good track of their inventory and also to manage their employees' equipment to prevent any hardware failures that might stop work for any undeterminated time.

This is when Unosquare's assetcore comes to the picture.

assetcore is a powerful tool that lets users keep track of their inventory on check, schedule Powershell commands to be executed on any computer the user wants and to organize every single piece of hardware or software the company may possess.
Today, I would like to discuss one of assetcore's must useful features: the job system.

## What is a Job?
The way we handle jobs in assetcore is not a very tricky concept. A **job** is the way we assign any number of computers, various Powershell commands to be executed on them. The job consists on three central parts:
1. Basic information.
A job will have a name and a description to keep a readable register of it and can be scheduled to run at a given time and day of the week.
By default, if no specfic time or day is given, the job will run everyday at first hour of the morning.

2. Asset assignation.
Jobs can be assigned to run on specific computers or group of computers by the user. In the same manner as the scheduling of jobs, if no specific computers or computer groups are given, the job will run on every computer in the organization.
Also, jobs need to have users assigned to be notified of the job results, so the user must assign at least one user that a job is currently running.

3. Command assignation and triggers.
Finally, the job **must** contain at least one command assigned to run. Users can either create their new commands or set previously created commands.
The last step is to create triggers to notify users when a job has thrown a result.

Example: If my job checks the data of a computer, I can create a trigger that will rise when the CPU's manufacturer is HP and will notify users which computers check positive on that condition.

## How can we create our own jobs?
  1. Basic information
  ![step01-basic info](https://user-images.githubusercontent.com/28661932/73490216-abbee000-4371-11ea-9d89-b32767cd9aa5.gif)

  2. Scheduling
  ![step02-schedule](https://user-images.githubusercontent.com/28661932/73490241-b5e0de80-4371-11ea-80cc-8094db530062.gif)

  3. Asset assignation
  ![step03-targets](https://user-images.githubusercontent.com/28661932/73490260-bc6f5600-4371-11ea-880c-d4f041319154.gif)

  4. Triggers
  ![step04-triggers](https://user-images.githubusercontent.com/28661932/73490272-c2fdcd80-4371-11ea-9fc0-7b7fe1ba4a2a.gif)

  5. Commands manager & Trigger rules
  ![step05-commandsTriggerRules](https://user-images.githubusercontent.com/28661932/73490285-c7c28180-4371-11ea-9cf1-9fe8d0cd3d31.gif)

  6. Voilà!
  Finally, you can select your new job in the job page:
  ![final](https://user-images.githubusercontent.com/28661932/73490626-81215700-4372-11ea-8686-105c47ec985d.png)

## Give it a try
assetcore is a very useful tool to keep track of any organization's inventory and offers powerful and easy-to-use tools.
Give a try! You can find it [here](https://store.unosquare.com/assetcore).
