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

    describe('New Feed Selection', function(){
        let firstFeed;
        let secondFeed; 

        beforeEach(function(done){
            loadFeed(0, function(){
                firstFeed = $('.feed').html();
            });
            loadFeed(1, function(){
                secondFeed = $('.feed').html();
                done();
            });
        });
        
        it('content changes', function(){
            expect(firstFeed).not.toBe(secondFeed);
        });
    });
}());
