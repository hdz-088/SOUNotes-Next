---
header: PCMT-04
title: PCMT-04 Transmission Media & OSI Model
slug: pcmt-04
semester: 2
image: /pcmt.png
accent: "#e5adee"
link: https://drive.google.com/file/d/14dN4yc9ncv7AKXgOyZBRe13nquG3Mr7-/view?usp=sharing
---

## Transmission Media

![](/pcmt/4pcmt1.png)

- A transmission media can be defined as anything that can carry information from a source to a destination.
- On the basis of transmission of data, the transmission media can be classified in to two categories:
  - **Guided (Physical) transmission media**
  - **Unguided (Wireless) transmission media**

## Guided Transmission Media

- Guided media are those that provide a channel from one device to another.
- The three Guided (Physical) media commonly used for data transmission are:

- **Twisted Pair** - A twisted pair consists of two insulated copper wires, typically about 1 mm thick. - The wires are twisted together in a helical form, just like a DNA molecule. - Twisting is done because two parallel wires constitute a fine antenna. - When the wires are twisted, the waves from different twists cancel out, so the wire radiates less effectively. - **Why cable is twisted?** - If the two wires are parallel, the effect of these unwanted signals is not the same in both wires because they are at different locations relatives to the noise or crosstalk sources. - This results in a difference at the receiver. - By twisting the pair, a balance is maintained.

![](/pcmt/4pcmt2.png)

- **Unshielded twisted-pair (UTP):** - UTP is made up of two insulated copper wires twisted around one another. - This cable can block interference and does not require a physical shield for this purpose. - It is employed in telephonic applications.

![](/pcmt/4pcmt3.png)

- **Shielded twisted-pair (STP):**
  - STP cable has a metal foil or braided mesh covering that encases each pair of insulated conductors.
  - Metal casing improves the quality of cable by preventing the penetration of noise or crosstalk.
  - It is bulkier and more expensive.
- **Application**:
  - Used in telephone lines to provide voice and data channels.
  - The DSL lines uses by telephone companies use the high-bandwidth capability of UTP cables.
  - LANs, such as 10Base-T, 100Base-T also uses twisted-pair cables

![](/pcmt/4pcmt4.png)

- **Coaxial Cable**:
  - It has better shielding than twisted pairs, so it can span longer distances at higher speeds.
  - Two kinds of coaxial cable are widely used. One kind is 50-ohm cable which is commonly used when it is intended for digital transmission from the start.
  - The other kind is 75-ohm cable which is commonly used for analogue transmission and cable television but is becoming more important with the advent of Internet over cable.
  - A coaxial cable consists of a stiff copper wire as the core surrounded by an insulating material.
  - The insulator is encased by a cylindrical conductor, often as a closely-woven braided mesh.
  - The outer conductor is covered in a protective plastic sheath.
  - The construction and shielding of the coaxial cable give it a good combination of high bandwidth and excellent noise immunity.
  - The bandwidth possible depends on the cable quality, length and signal-to-noise ratio of the data signal. Modern cables have a bandwidth of close to 1 GHz.
  - Coaxial cables used is widely used within the telephone system for long-distance lines but have now largely been replaced by fibre optics on long-haul routes

![](/pcmt/4pcmt5.png)

- **Fibre Optics:**
  - A fibre-optic cable is made of glass or plastic and transmits signals in the form of light
  - Optical fibres use reflection to guide light through a channel.
  - A glass or plastic core is surrounded by a cladding of less dense glass or plastic.
  - The difference in density of the two materials must be such that a beam of light moving through a core is reflected off the cladding instead of being refracted into it.
  - Fibre optic cables are similar to coax, except without the braid.
  - At the centre is the glass core through which the light propagates.
  - The core is surrounded by a glass cladding with a lower index of refraction than the core, to keep all the light in the core.
  - Next comes a thin plastic jacket to protect the cladding.
  - Fibres are typically grouped in bundles, protected by an outer sheath.

## Unguided Transmission Media

- Unguided media transport electromagnetic waves without using a physical conductor.
- This type of communication is often referred to as wireless communication.

![](/pcmt/4pcmt6.png)

- **Radio Transmission**:
  - Radio waves are easy to generate, can travel long distances, and can penetrate buildings easily, so they are widely used for communication, both indoors and outdoors.
  - Radio waves also are unidirectional, meaning that they travel in all directions from the source, so the transmitter and receiver do not have to be carefully aligned physically.
  - The properties of radio waves are frequency dependent.
  - At low frequencies, radio waves pass through obstacles well, but the power falls off sharply with distance from the source, roughly as 1/r2 in air.
  - At high frequencies, radio waves tend to travel in straight lines and bounce off obstacles. They are also absorbed by rain.
  - At all frequencies, radio waves are subject to interference from motors and other electrical equipment.
  - In the VLF, LF, and MF bands, radio waves follow the curvature of the earth. In the HF they bounce off the ionosphere

![](/pcmt/4pcmt7.png)

- **Microwave Transmission**:
  - Since the microwaves travel in a straight line, if the towers are too far apart, the earth will get in the way. Consequently, repeaters are needed periodically.
  - Unlike radio waves at lower frequencies, microwaves do not pass through buildings well.
  - In addition, even though the beam may be well focused at the transmitter, there is still some divergence in space.
  - **Advantages**:
    - No right way is needed (compared to wired media).
    - Relatively inexpensive.
    - Simple to install.
  - **Disadvantages**:
    - Do not pass through buildings well.
    - Multipath fading problem (the delayed waves cancel the signal).
    - Absorption by rain above 8 GHz.

![](/pcmt/4pcmt8.png)

- Infrared:
  - Unguided infrared and millimetre waves are widely used for short-range communication.
  - The remote controls used on televisions, VCRs, and stereos all use infrared communication.
  - They are relatively directional, cheap, and easy to build but have a major drawback: they do not pass through solid objects (try standing between your remote control and your television and see if it still works).
  - In general, as we go from long-wave radio toward visible light, the waves behave more and more like light and less and less like radio.
  - On the other hand, the fact that infrared waves do not pass through solid walls well is also a plus.
  - It means that an infrared system in one room of a building will not interfere with a similar system in adjacent rooms or buildings.
  - Furthermore, security of infrared systems against eavesdropping is better than that of radio systems precisely for this reason.
  - Therefore, no government license is needed to operate an infrared system, in contrast to radio systems, which must be licensed outside the ISM bands.

## OSI Reference Model

![](/pcmt/4pcmt9.png)

- The model is called the OSI (Open Systems Interconnection) Reference Model because it deals with connecting open systems—that is, systems that are open for communication with other systems.
- The OSI model has seven layers:
  - **Physical Layer**:
    - In this layer the data gets converted into a binary form
  - **Datalink Layer**:
    - Data link layer facilitates data transfer between two devices on the *same* network.
    - It is also responsible for flow control and error control in intra-network communication
  - **Network Layer**:
    - The network layer is responsible for facilitating data transfer between two different networks.
    - If the two devices communicating are on the same network, then the network layer is unnecessary.
    - The network layer breaks up segments from the transport layer into smaller units, called packets, on the sender’s device, and reassembling these packets on the receiving device.
  - **Transport Layer**:
    - It is responsible for end-to-end communication between the two devices.
    - It transports data between hardware and software.
    - It is heart of OSI
  - **Session Layer**:
    - This is the layer responsible for opening and closing communication between the two devices.
    - The time between when the communication is opened and closed is known as the session.
    - The session layer ensures that the session stays open long enough to transfer all the data being exchanged, and then promptly closes the session in order to avoid wasting resources.
  - **Presentation Layer**:
    - This layer is primarily responsible for preparing data so that it can be used by the application layer.
    - It is responsible for translating incoming data into a syntax that the application layer of the receiving device can understand.
  - **Application Layer**:
    - This is the only layer that directly interacts with data from the user.
    - It is the interface between user and device

## TCP/IP Reference Model

![](/pcmt/4pcmt10.png)

- Transmission Control Protocol/Internet Protocol (TCP/IP) protocol suite is the engine for the Internet and networks worldwide.
- TCP/IP either combines several OSI layers into a single layer, or does not use certain layers at all.
- TCP/IP is a set of protocols developed to allow cooperating computers to share resources across the network.
- The TCP/IP model has four layers.
  - **Application Layer**:
    - The application layer is what most internet users interact with directly.
    - It’s responsible for the communication between end-user applications and the lower layers of the TCP/IP stack.
  - **Transport Layer**:
    - This layer ensures data transmission between two devices is reliable.
    - It breaks down large messages into smaller packets, sends those packets to the target machine, and then the target machine reassembles the packets back into the original message.
  - **Internet(Network) Layer**:
    - It’s responsible for addressing, packaging, and routing data to its destination.
  - **Data Link Layer**:
    - This layer deals with the physical connection between devices.
    - The link layer is all about getting data on and off the physical network medium.

---
