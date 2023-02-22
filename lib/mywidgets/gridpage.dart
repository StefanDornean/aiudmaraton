import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

class GridPage extends StatefulWidget {
  @override
  _GridPageState createState() => _GridPageState();
}

class _GridPageState extends State<GridPage> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(24.0),
          color: Colors.white,
        ),
        child: StaggeredGridView.count(
          crossAxisCount: 4,
          mainAxisSpacing: 4.0,
          crossAxisSpacing: 4.0,
          staggeredTiles: [
            StaggeredTile.count(4, 2),
            StaggeredTile.count(1, 1),
            StaggeredTile.count(1, 1),
            StaggeredTile.count(1, 1),
            StaggeredTile.count(1, 1),
            StaggeredTile.count(4, 1),
            StaggeredTile.count(4, 2),
            StaggeredTile.count(1, 1),
            StaggeredTile.count(1, 1),
            StaggeredTile.count(1, 1),
            StaggeredTile.count(1, 1),
            StaggeredTile.count(4, 1),
          ],
          children: <Widget>[
            myPhotoList("assets/images/animals.jpg"),
            myPhotoList("assets/images/animals.jpg"),
            myPhotoList("assets/images/animals.jpg"),
            myPhotoList("assets/images/animals.jpg"),
            myPhotoList("assets/images/animals.jpg"),
            captionText("Norway", "Just now"),
            myPhotoList("assets/images/animals.jpg"),
            myPhotoList("assets/images/animals.jpg"),
            myPhotoList("assets/images/animals.jpg"),
            myPhotoList("assets/images/animals.jpg"),
            myPhotoList("assets/images/animals.jpg"),
            captionText("Mountains", "2 day ago"),
          ],
          padding: const EdgeInsets.all(4.0),
        ),
      ),
    );
  }

  Widget captionText(String titleText, String subText) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        child: Column(
          children: <Widget>[
            SizedBox(height: 20.0),
            Align(
              alignment: Alignment.centerLeft,
              child: Container(
                child: Text(
                  titleText,
                  style: TextStyle(color: Colors.black, fontSize: 24.0),
                ),
              ),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Container(
                child: Text(
                  subText,
                  style: TextStyle(color: Colors.blueGrey, fontSize: 16.0),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget myPhotoList(String MyImages) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          fit: BoxFit.fill,
          image: NetworkImage(MyImages),
        ),
      ),
    );
  }
}
