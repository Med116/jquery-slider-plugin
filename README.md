jquery-slider-plugin
====================

slide_items.js


##EXAMPLE HTML

`<div id="slide_container"></div>`


## USE JQuery to make this div a slider, with your data


            var data = {
                "previews": [{
                    "title": "# of Bills Filed by Year",
                        "src": "http://prospect.org/sites/default/files/styles/thumbnail/public/white_house_job_graph.jpg"
                }, {
                    "title": "House Bill Sponsors 2013-2014",
                        "src": "http://www.theoldhag.com/wp-content/uploads/2007/02/graph.thumbnail.jpg"
                }, {
                    "title": "Most Tracked Bills 2013-2014",
                        "src": "http://engelska.se/files/images/MVG%20VG%20graph.thumbnail.jpg"
                }, {
                    "title": "Budgets from this session",
                        "src": "http://engelska.se/files/images/MVG%20VG%20graph.thumbnail.jpg"
                }, {
                    "title": "Popular legislators",
                        "src": "http://engelska.se/files/images/MVG%20VG%20graph.thumbnail.jpg"
                }, {
                    "title": "Weekly Engagement",
                        "src": "http://engelska.se/files/images/MVG%20VG%20graph.thumbnail.jpg"
                }, {
                    "title": "Yearly Engagement",
                        "src": "http://engelska.se/files/images/MVG%20VG%20graph.thumbnail.jpg"
                }],
                    "wrapperHeight": 300,
                    "wrapperWidth": 500,
                    "previewWidth": 175,
                    "show": 2,
                    "imgPadding": 5,
                    "speed": 300,
                    "arrowWidth": 75
            };

            jQuery("#slide_container").slideItems(data);
