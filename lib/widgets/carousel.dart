import 'package:carousel_slider/carousel_slider.dart';
import 'package:explore/widgets/responsive.dart';
import 'package:flutter/material.dart';

class DestinationCarousel extends StatefulWidget {
  @override
  _DestinationCarouselState createState() => _DestinationCarouselState();
}

class Sportiv {
  final String img;
  final String title;
  final String text;

  Sportiv({required this.img, required this.title, required this.text});
}

class _DestinationCarouselState extends State<DestinationCarousel> {
  final String imagePath = 'assets/images/';

  final CarouselController _controller = CarouselController();

  List _isHovering = [false, false, false, false, false, false, false];
  List _isSelected = [true, false, false, false, false, false, false];

  int _current = 0;

  final List<Sportiv> images = [
    Sportiv(
        img: 'assets/images/levente.jpg',
        title: 'Polgar Levente Ioan',
        text:
            'Un sportiv de ultramaraton cu rezultate impresionante la nivel national și internațional.')
  ];

  final List<String> places = [
    'PLAJA',
    'CANOE',
    'EXPLORAT',
    'PESCUIT',
    'CALARIT',
    'DESCOPERIT',
  ];

  List<Widget> generateImageTiles(screenSize) {
    return images
        .map((sportiv) => ClipRRect(
              borderRadius: BorderRadius.circular(8.0),
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  color: Colors.white,
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withOpacity(0.5),
                      spreadRadius: 2,
                      blurRadius: 5,
                      offset: Offset(0, 3),
                    ),
                  ],
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    AspectRatio(
                      aspectRatio: 0.75,
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(5.0),
                        child: Image.asset(
                          sportiv.img,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    SizedBox(width: 16),
                    Expanded(
                      child: Padding(
                        padding: EdgeInsets.symmetric(vertical: 16),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              sportiv.title,
                              style: TextStyle(
                                fontSize:
                                    ResponsiveWidget.isSmallScreen(context)
                                        ? 14
                                        : 22,
                                fontFamily: 'Montserrat',
                                fontWeight: FontWeight.bold,
                                color: Colors.black,
                              ),
                            ),
                            SizedBox(height: 8),
                            Text(
                              sportiv.text,
                              style: TextStyle(
                                height: 1.5,
                                fontSize:
                                    ResponsiveWidget.isSmallScreen(context)
                                        ? 10
                                        : 16,
                                fontFamily: 'Montserrat',
                                color: Colors.black,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ))
        .toList();
  }

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    var imageSliders = generateImageTiles(screenSize);

    return Stack(
      children: [
        Column(
          children: [
            ResponsiveWidget.isSmallScreen(context)
                ? Container(
                    padding: EdgeInsets.only(
                      top: screenSize.height / 20,
                      bottom: screenSize.height / 20,
                    ),
                    width: screenSize.width,
                    child: Text(
                      'Spotivi',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 24,
                        fontFamily: 'Montserrat',
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  )
                : Container(
                    padding: EdgeInsets.only(
                      top: screenSize.height / 10,
                      bottom: screenSize.height / 15,
                    ),
                    width: screenSize.width,
                    child: Text(
                      'Sportivi',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 40,
                        fontFamily: 'Montserrat',
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
            SizedBox(height: 25),
            Padding(
              padding: EdgeInsets.all(16.0),
              child: CarouselSlider(
                items: imageSliders,
                options: CarouselOptions(
                    enlargeCenterPage: true,
                    aspectRatio: ResponsiveWidget.isSmallScreen(context)
                        ? 16 / 8
                        : 18 / 8,
                    autoPlay: true,
                    onPageChanged: (index, reason) {
                      setState(() {
                        _current = index;
                        for (int i = 0; i < imageSliders.length; i++) {
                          if (i == index) {
                            _isSelected[i] = true;
                          } else {
                            _isSelected[i] = false;
                          }
                        }
                      });
                    }),
                carouselController: _controller,
              ),
            )
          ],
        )
      ],
    );
  }
}
