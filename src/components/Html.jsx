import React from 'react';

var Html = React.createClass({
    render: function () {
        return (
            <html>
            <head>
                <meta charSet="utf-8"/>
                <title>{this.props.title}</title>
                <meta name="viewport"
                      content="width=device-width,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, initial-scale=1"/>
                <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,300italic,400italic'
                      rel='stylesheet' type='text/css'/>
                <link href='/styles/main.css' rel="stylesheet" type="text/css"/>
                <link href={this.props.assets.styles.main}  rel="stylesheet" type="text/css"></link>
            </head>
            <body>
            <div id='main'>
                <div id='app' dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </div>
            <script dangerouslySetInnerHTML={{__html: this.props.exposed}}></script>
            <script src={this.props.assets.javascript.common}></script>
            <script src={this.props.assets.javascript.main}></script>
            </body>
            </html>
        );
    }
});

export default Html