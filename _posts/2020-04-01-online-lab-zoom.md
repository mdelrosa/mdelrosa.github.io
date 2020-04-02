---
layout: post
title:  "Online Labs in Zoom: Some Tactics"
tags: ['Engineering Education', 'Online Teaching']
---

I recently wrote on the [landscape of online engineering education](../../03/16/the-future-of-online-eng-edu.html). That was about strategy, but this post is about tactics. Primarily: how does one manage a large(-ish) group of students in an online laboratory?

(Note: I use capital-L "Lab" to mean an assignment, and lower case-l "lab" or "laboratory" to mean the space (physical or virtual) where we work.)

## Context

This quarter, I am a Teaching Assistant for a lab-based course, EEC10 Analog and Digital Circuits. The Labs involves building and testing circuits, programming microcontrollers, and integrating these analog and digital systems to prepare for a final project, where the students program a small robot (the [TI RSLK](https://university.ti.com/en/faculty/ti-robotics-system-learning-kit/ti-robotics-system-learning-kit)) to follow sound.

This course is well-developed for in-person teaching, but given county-level shelter-in-place orders and university-issued bans on in-person courses, our students are unable to come to campus.

I am responsible for a section of 20 students. We are scheduled to meet every Wednesday for 3 hours. While students used to have to physically show up to the lab, I now have a recurring Zoom meeting where I "meet" them.

## Crowd Control

In a typical Lab setting, there are a few behaviors that do not intuitively map to a Zoom meeting. Namely,
1. Students can fluidly switch between working on the current Lab and seeking help from TAs/classmates
2. Students can easily show their circuits to TAs/classmates

**Point 1** is complicated by a virtual lab. A physical lab allows for students to pick up on visual cues; if Alice makes a little celebratory gesture, then Bob, who might be a bit behind, might ask Alice how she solved her problem.

However, in Zoom meetings, most participants mute their audio and video, preventing these cues from being detected. Self-muting is courteous for most online meetings (lectures, seminars, etc.) but detrimental to spontaneous collaboration needed for labs. 

To encourage students to collaborate, we are trying Zoom's [breakout room feature](https://support.zoom.us/hc/en-us/articles/206476313-Managing-Breakout-Rooms). I randomly assign students to breakout rooms, and if they are in the lab meeting to do work, I ask them to enter the breakout room. I cycle through the breakout rooms to see how students are doing, and if a student "raises their hand" [(a Zoom feature)](https://support.zoom.us/hc/en-us/articles/205566129-Raise-Hand-In-Webinar), then I can see that they need assistance.

![Main room/breakout room workflow][zoom]{:.mx-auto.d-block.img-fluid.img-small.max-width: 100%;}
<center>
<small>Figure 1: Relationship between the "Main Session" in Zoom and the "Breakout Rooms." In our lab, the Main Session is where the TA will typically be, but he/she will move between breakout rooms (where the students are working) depending on whether someone is raising their hand.</small></center><br>

We suspect that in the context of a smaller group, students will feel more comfortable unmuting themselves, allowing for more spontaneous vocal and visual cues and better collaboration.

**Point 2** is complicated by the high variance in students' audio-visual equipment. Typically, students will just use their integrated web-cam, which does not always have good auto-focusing features, meaning when they hold their circuit up to the camera, it will often come out as blurry.

To remedy this, I am considering asking students to enter the meeting with their smartphones in addition to their computers when they want to show their circuits. Almost all students will have a smart phone, which can serve as a more adjustable and better focused camera. They will be able to join the meeting on the smartphone and stream the phone's feed to the meeting so I can get a better detailed view.

This may cause more frustration than it is worth if the camera is not steady. If students can find a way to solidly mount their phones so they have both hands to point out points on the circuit, then this might be a viable solution. I am using a repurposed PCB holder ([Amazon Prime, $10.29](https://www.amazon.com/Adjustable-Soldering-Rotisserie-spring-clamp-rotation-lock/dp/B01709B0PW)), but Amazon has a relatively cheap phone mount ([Amazon Prime, $7.99](https://www.amazon.com/Honsky-Portable-Universal-Cellphone-Smartphone/dp/B00REG88C0?ref_=fsclp_pl_dp_9)).

![My phone setup for Zoom labs][phone]{:.d-block.img-fluid.img-small.max-width: 100%;}
<center>
<small>Figure 2: My phone setup for Zoom labs using a PCB mount.</small></center><br>

![Amazon option][mount]{:.d-block.img-fluid.img-small.max-width: 100%;}
<center>
<small>Figure 3: Phone mount that could facilitate detail views of circuits.</small></center><br>

Of course, getting a better view of the students' circuit does not let a TA or classmate point directly at the circuit -- but getting good visuals is the first step to helping students debug.

[zoom]: /images/blog/2020/04/01/zoom-breakout.png
[phone]: /images/blog/2020/04/01/phone-setup.JPG
[mount]: /images/blog/2020/04/01/mount.jpg