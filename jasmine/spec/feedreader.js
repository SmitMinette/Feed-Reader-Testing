$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has a URL', function(){
            for(const feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.length).not.toBe(0);
            }
        });

        it('has a name', function(){
            for(const feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(0);
            }
        })
    });


    describe('The menu', function(){
        const menu  = document.querySelector('body');

        it('is hidden', function(){
            expect(menu.classList.contains('menu-hidden')).toBe(true);
        });

        it('changes visibility', function(){
            const menuLink = document.querySelector('.menu-icon-link');

            menuLink.click();
            expect(menu.classList.contains('menu-hidden')).toBe(false);

            menuLink.click();
            expect(menu.classList.contains('menu-hidden')).toBe(true);
        }); 
    });
    
    describe('Initial Entries', function() {
        beforeEach(function(done){
            loadFeed(0, done);
        })
        const feed = document.querySelector('.feed');

        it('should have at least one entry', function(){
            expect(feed.children.length > 0).toBe(true);
        });
    });

    
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
