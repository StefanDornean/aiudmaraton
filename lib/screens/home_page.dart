import 'package:explore/widgets/bottom_bar.dart';
import 'package:explore/widgets/carousel.dart';
import 'package:explore/widgets/destination_heading.dart';
import 'package:explore/widgets/explore_drawer.dart';
import 'package:explore/widgets/featured_heading.dart';
import 'package:explore/widgets/featured_tiles.dart';
import 'package:explore/widgets/floating_quick_access_bar.dart';
import 'package:explore/widgets/responsive.dart';
import 'package:explore/widgets/top_bar_contents.dart';
import 'package:flutter/material.dart';

import '../mywidgets/count_down.dart';
import '../mywidgets/gridpage.dart';
import '../widgets/newsletter.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final ScrollController _scrollController = ScrollController();
  double _scrollPosition = 0;
  double _opacity = 0;

  _scrollListener() {
    setState(() {
      _scrollPosition = _scrollController.position.pixels;
    });
  }

  @override
  void initState() {
    _scrollController.addListener(_scrollListener);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    _opacity = _scrollPosition < screenSize.height * 0.40
        ? _scrollPosition / (screenSize.height * 0.40)
        : 1;

    double paddingText = ResponsiveWidget.isSmallScreen(context) ? 50 : 300;

    return Scaffold(
      extendBodyBehindAppBar: true,
      backgroundColor: Color(0xFFF2ECE6),
      appBar: ResponsiveWidget.isSmallScreen(context)
          ? AppBar(
              backgroundColor: Color(0xFF7F9BAE),
              elevation: 0,
              title: Image.asset(
                'assets/images/logonobg.png',
                height: 40,
              ),
              centerTitle: true,
            )
          : PreferredSize(
              preferredSize: Size(screenSize.width, 1000),
              child: TopBarContents(_opacity),
            ),
      drawer: ExploreDrawer(),
      body: SingleChildScrollView(
        controller: _scrollController,
        physics: ClampingScrollPhysics(),
        child: Column(
          children: [
            SizedBox(height: ResponsiveWidget.isSmallScreen(context) ? 50 : 70),
            Padding(
              padding: EdgeInsets.fromLTRB(paddingText, 50, paddingText, 50),
              child: Container(
                child: Center(
                    child: Column(
                  children: [
                    Text(
                      'Misiunea noastră',
                      style: TextStyle(
                        fontSize: 22,
                        fontFamily: 'Montserrat',
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    SizedBox(height: 15),
                    Text(
                      'Evenimentul “Aiud Maraton”, a luat naștere la inițiativa sportivului Polgar Levente Ioan, un sportiv de ultramaraton cu rezultate impresionante la nivel national și internațional. \n Maratonul de la Aiud are ca scop principal strângerea de fonduri pentru susținerea Asociației Invinctus Romania și a Asociației Persoanelor cu Handicap Neuromotor din Romania (AHNR), cât si promovarea tinerilor sportivi.',
                      style: TextStyle(
                        height: 1.5,
                        fontSize: 16,
                        fontFamily: 'Montserrat',
                        color: Colors.black,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    SizedBox(height: 15),
                    Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(5),
                          color: Color(0xFF7F9BAE),
                        ),
                        child: InkWell(
                          onHover: (value) {},
                          onTap: () {},
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              SizedBox(height: 5),
                              Text(
                                '  3 Iunie 2023  ',
                                style: TextStyle(
                                  fontSize:
                                      ResponsiveWidget.isSmallScreen(context)
                                          ? 14
                                          : 22,
                                  fontFamily: 'Montserrat',
                                ),
                              ),
                              SizedBox(height: 6)
                            ],
                          ),
                        ))
                  ],
                )),
              ),
            ),
            SizedBox(height: 25),
            Container(
              width: double.infinity,
              child: Image.asset(
                'assets/images/bg1.jpg',
                fit: BoxFit.fitWidth,
              ),
            ),
            SizedBox(height: 25),
            NewsLetter(),
            SizedBox(height: screenSize.height / 10),
            //DestinationHeading(screenSize: screenSize),
            Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(5),
                  color: Color(0xFF7F9BAE),
                ),
                child: DestinationCarousel()),
            SizedBox(height: screenSize.height / 10),
            BottomBar(),
          ],
        ),
      ),
    );
  }
}
