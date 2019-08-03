---
layout: post
title:  "Teaching and the Internet of Things"
tags: ['Teaching', 'Education']
---

With respect to this blog, I dropped off the radar for the month of July. The reason for this was largely because I was teaching an IoT course for high school students. This is a quick post summarizing some of my thoughts on the experience.

## 1. Children of Summer

After taking on my first Teaching Assistant position for a Control Systems course in Fall 2018, my professor asked me if I wanted to help develop and teach a summer high school course for Internet of Things (IoT) devices. The course was offered as part of the [COSMOS program](https://cosmos.ucdavis.edu/), a 4-week summer program where high school students live on campus and take a STEM-oriented course.

One of my major motivating factors for entering graduate school was to become a better engineering educator. While I am confident that I want to teach at a collegiate level, I figured that teaching high school students would be a useful exercise.

## 2. First Time's the Charm

We based our curriculum on an [IoT Course](https://sites.google.com/view/ucla-stmicroelectronics-iot/home) developed by UCLA and STMicroelectronics. The course was based on the [SensorTile](https://www.st.com/en/evaluation-tools/steval-stlkt01v1.html) (pictured below).

![SensorTile to scale][st1]{:.mx-auto.d-block.img-fluid.max-width: 100%;}
<center>
<small>Figure 1: The SensorTile (pictured, to scale) includes a microphone, an accelerometer, a gyroscope, a magnetometer, and a barometer.</small></center><br>

While introductory embedded systems courses typically involve an Arduino or a Raspberry Pi, the SensorTile has the advantage of having integrated sensors. Other commonly used microcontrollers need to interface with external devices which require students to deal with making connections (breadboards and jumpers abound) and to learn how to use additional software libraries. 

Being the first iteration of this course, we encountered many problems, including:

1. *Quality of the curriculum*: For the first two weeks of the course, we had the students complete the tutorials and one of the reference designs from the UCLA curriculum. In general, the students were really talented, and since the tutorials were step-by-step procedures (i.e., largely told them to copy-paste large blocks of code), they could quickly follow the instructions without really understanding what they were doing. In the future, we might add open-ended challenge questions to push students to synthesize and retool the information which is presented in the current tutorials.
2. *Complexity of the toolchain*: The theme of the course was "Internet of Things," meaning their projects should have included some level of wireless connectivity. The tutorials leveraged the [ST BLE Sensor](https://www.st.com/en/embedded-software/stblesensor.html) application to connect a smartphone to the SensorTile. From the app, the students could either read out data directly or send it to [IBM's IoT cloud platform](https://www.ibm.com/internet-of-things). The students managed to make this workflow viable by learning to use [Node-Red](https://nodered.org/) to develop applications capable of reading data from IBM's platform. While this workflow (SensorTile to phone to IBM to Node-Red app) was serviceable, ideally, we would have shown the students how to use a shorter toolchain (e.g. a GSM module to send texts directly from their devices).
3. *Difficulty with low-level programming*: As the course involved embedded systems development, the students needed to get familiar with C. While students had prior exposure to higher level languages, fluency in embedded programming requires familiarity with some gnarly concepts (i.e., pointers, addresses, memory, interrupts). Given the compressed timescale of the class, we did not have time to cover these ideas. In the future, we might investigate using a different toolchain which interfaces with a higher-level language (e.g., Python).

## 3. The Joys of Teaching

I had my reservations about teaching high school students. Recalling how insufferable I was as a high schooler, I assumed that most modern high schoolers are similar to my past self.

![2019 COSMOS Cluster 8][group]{:.mx-auto.d-block.img-fluid.max-width: 100%;}
<center>
<small>Figure 2: Picture of 2019 COSMOS Cluster 8 on at the Intel Museum during one of our field trips.</small></center><br>

However, I was consistently impressed by their quality of work and the extent of their curiosity. During the latter half of the program, we allowed the kids to choose their own IoT projects. Some examples of the projects which the groups worked on included:

- A smart bike lock that notified users of an attempted theft via text message
- A dog collar that notifies a user of dog misbehavior
- A sleep apnea detection system
- A method of contactless water detection in a pipe intended for use in rural India

To see our students work on problems that with the potential to have real impact on people's lives was inspiring. (Frankly, I'm a little jealous that I didn't get to take a similar class in high school...)

I enjoyed the chance to coach the teams through their respective engineering problems, whether they were trying to install obscure drivers or deciding how to implement their detection algorithms.  Most of our students are gearing up to apply for college, and I really appreciated the opportunity to be a resource for students who are considering engineering as a professional discipline.

## 4. Moving Forward

I would love to continue developing the course for future COSMOS sessions. Eventually, the course might be re-tooled as an undergraduate engineering course. Before then, we have to improve the difficulty and utility of the lab assignments, figure out more compact toolchains, and decide whether we want to use a C-based microcontroller.

Also, it would be interesting to add machine learning to the curriculum, as many of the students' projects involved classification (e.g., figure out if a given set of accelerometer data corresponds to a dog jumping on a kitchen counter). Four weeks might not be enough time to introduce embedded systems and machine learning, but since future IoT developers will likely need familiarity with both, a course including both these concepts could be really valuable.

[group]: /images/blog/2019/08/cluster8.jpg
[st1]: https://i0.wp.com/blog.st.com/wp-content/uploads/RS6119_SensorTile_pencil-hpr-resized.jpg?fit=780%2C439&ssl=1