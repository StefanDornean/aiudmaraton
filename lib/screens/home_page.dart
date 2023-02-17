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
      appBar: ResponsiveWidget.isSmallScreen(context)
          ? AppBar(
              backgroundColor: Color(0xFF347C4C),
              elevation: 0,
              title: Image.asset(
                'assets/images/logo.png',
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
            SizedBox(height: 50),
            Padding(
              padding: EdgeInsets.fromLTRB(paddingText, 50, paddingText, 50),
              child: Container(
                child: Center(
                  child: Text(
                    'Îți oferim condiții excelente de cazare, îți recomandăm cei mai ospitalieri localnici, cele mai gustoase preparate pescărești și diverse modalități personalizate de petrecere a timpului liber, toate pentru a te ajuta să trăiești farmecul de altădată al acestui oraș unic în lume.',
                    style: TextStyle(
                      fontSize:
                          ResponsiveWidget.isSmallScreen(context) ? 11 : 25,
                      fontFamily: 'Montserrat',
                      color: Colors.black,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
              ),
            ),
            SizedBox(height: 25),
            Container(
              child: Image.asset(
                'assets/images/background.jpg',
                fit: BoxFit.cover,
              ),
            ),
            DestinationHeading(screenSize: screenSize),
            DestinationCarousel(),
            Column(
              children: [
                //FloatingQuickAccessBar(screenSize: screenSize),
                Container(
                  child: Column(
                    children: [
                      FeaturedHeading(
                        screenSize: screenSize,
                      ),
                      FeaturedTiles(screenSize: screenSize)
                    ],
                  ),
                ),
              ],
            ),
            SizedBox(height: screenSize.height / 10),
            BottomBar(),
          ],
        ),
      ),
    );
  }
}
