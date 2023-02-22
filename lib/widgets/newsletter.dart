import 'dart:html';

import 'package:explore/widgets/responsive.dart';
import 'package:flutter/material.dart';

class NewsLetter extends StatefulWidget {
  @override
  _NewsLetterModalState createState() => _NewsLetterModalState();
}

class _NewsLetterModalState extends State<NewsLetter> {
  final _formKey = GlobalKey<FormState>();

  String _emailAddress = "";

  @override
  Widget build(BuildContext context) {
    return Form(
        key: _formKey,
        child: Column(
          children: [
            Text(
              'Noutăți',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 24,
                fontFamily: 'Montserrat',
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 25),
            Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
              Expanded(
                  child: ResponsiveWidget.isSmallScreen(context)
                      ? Column(children: [
                          TextFormField(
                            decoration: InputDecoration(labelText: 'Email'),
                            validator: (value) {
                              if (value?.isEmpty == true) {
                                return 'Adauga adresa ta de email';
                              }
                              return null;
                            },
                            onSaved: (value) => _emailAddress = value ?? "",
                          ),
                          SizedBox(height: 20),
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
                                      '  Abonează-te ',
                                      style: TextStyle(
                                        fontSize:
                                            ResponsiveWidget.isSmallScreen(
                                                    context)
                                                ? 14
                                                : 22,
                                        fontFamily: 'Montserrat',
                                      ),
                                    ),
                                    SizedBox(height: 6)
                                  ],
                                ),
                              ))
                        ])
                      : Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            SizedBox(
                                width: 300,
                                child: TextFormField(
                                  decoration:
                                      InputDecoration(labelText: 'Email'),
                                  validator: (value) {
                                    if (value?.isEmpty == true) {
                                      return 'Adauga adresa ta de email';
                                    }
                                    return null;
                                  },
                                  onSaved: (value) =>
                                      _emailAddress = value ?? "",
                                )),
                            SizedBox(width: 25),
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
                                        '  Abonează-te ',
                                        style: TextStyle(
                                          fontSize:
                                              ResponsiveWidget.isSmallScreen(
                                                      context)
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
            ]),
            SizedBox(width: 10), // Add some spacing between the widgets
          ],
        ));
  }
}
