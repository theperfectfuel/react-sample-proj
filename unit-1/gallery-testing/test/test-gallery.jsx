var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;

var Gallery = require('../gallery');
var Image = require('../image');

describe('Gallery component', function() {
    it('Renders images',  function() {
        var images = [
            {
                url: "http://www.example.com/image1.png",
                description: "Example description 1"
            },
            {
                url: "http://www.example.com/image2.png",
                description: "Example description 2"
            },
            {
                url: "http://www.example.com/image3.png",
                description: "Example description 3"
            }
        ];

        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images} />);
        var result = renderer.getRenderOutput();
        expect(result.props.className).to.equal('gallery');
        expect(result.props.children.length).to.equal(3);

        var image = result.props.children[0];
        expect(image.type).to.equal(Image);
        expect(image.props.url).to.equal(images[0].url);
        expect(image.props.description).to.equal(images[0].description);

        var image = result.props.children[1];
        expect(image.type).to.equal(Image);
        expect(image.props.url).to.equal(images[1].url);
        expect(image.props.description).to.equal(images[1].description);

        var image = result.props.children[2];
        expect(image.type).to.equal(Image);
        expect(image.props.url).to.equal(images[2].url);
        expect(image.props.description).to.equal(images[2].description);
    });
});
