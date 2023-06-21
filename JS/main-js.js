

jQuery(document).ready(function($) {
    'use strict';

    // ============================================================== 
    // Notification list
    // ============================================================== 
    if ($(".notification-list").length) {

        $('.notification-list').slimScroll({
            height: '250px'
        });

    }

    // ============================================================== 
    // Menu Slim Scroll List
    // ============================================================== 


    if ($(".menu-list").length) {
        $('.menu-list').slimScroll({

        });
    }

    // ============================================================== 
    // Sidebar scrollnavigation 
    // ============================================================== 

    if ($(".sidebar-nav-fixed a").length) {
        $('.sidebar-nav-fixed a')
            // Remove links that don't actually link to anything

            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 90
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                };
                $('.sidebar-nav-fixed a').each(function() {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');
            });

    }

    // ============================================================== 
    // tooltip
    // ============================================================== 
    if ($('[data-toggle="tooltip"]').length) {
            
            $('[data-toggle="tooltip"]').tooltip()

        }

     // ============================================================== 
    // popover
    // ============================================================== 
       if ($('[data-toggle="popover"]').length) {
            $('[data-toggle="popover"]').popover()

    }
     // ============================================================== 
    // Chat List Slim Scroll
    // ============================================================== 
        

        if ($('.chat-list').length) {
            $('.chat-list').slimScroll({
            color: 'false',
            width: '100%'


        });
    }
    // ============================================================== 
    // dropzone script
    // ============================================================== 

 //     if ($('.dz-clickable').length) {
 //            $(".dz-clickable").dropzone({ url: "/file/post" });
 // }

}); // AND OF JQUERY


$(document).ready(function() {
    $("#newQuote").click(newQuote);
  });
  
  var usedQuotes = []; // store which quotes have been used
  var index = -1;
  
  function newQuote (){ 
      do {
        index = Math.floor((Math.random() * quotes.length) + 1) - 1;
      } while (usedQuotes.indexOf(index) !== -1);
      usedQuotes.push(index);
      if (usedQuotes.length === quotes.length) {
        usedQuotes.length = 0;
      }
      $('#use').text(" " + quotes[index][0] + ' ');
      //$("#quote").html('<i class="fa fa-quote-left"></i> ' + quotes[index][0] + ' <i class="fa fa-quote-right"></i>');
      $("#author").text('~ ' + quotes[index][1]);
  }
  
  // this is from http://gpiot.com/blog/elegant-twitter-share-button-and-dialog-with-jquery/
  $('a.tweet').click(function(e){
  
    //We tell our browser not to follow that link
    e.preventDefault();
  
    //We get the URL of the link
    var loc = "www.greg.com";
  
    var title;
    if (index !== -1){
      title = quotes[index][0] + "~" + quotes[index][1];
    }else
        title = $('#use').text() + ' ' + $('#author').text();
    
    title = title.replace(/;/g, '.'); // tweet will stop at ";"
    
    //We trigger a new window with the Twitter dialog, in the middle of the page
    window.open('https://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  
  });
  
  var quotes = [
    ["Learn as if you will live forever, live like you will die tomorrow.", "Mahatma Gandi"],

    ["We cannot solve problems with the kind of thinking we employed when we came up with them.", "Albert Einstein"],

    ["Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.", "Robert Frost"],
  
    ["I attribute my success to this: I never gave or took any excuse.", "Florence Nightingale"],
  
    ["You miss 100% of the shots you don`t take.", "Wayne Gretzky"],

    ["I`ve missed more than 9000 shots in my career. I`ve lost almost 300 games. 26 times I`ve been trusted to take the game winning shot and missed. I`ve failed over and over and over again in my life. And that is why I succeed.", "Michael Jordan"],
  
    ["The most difficult thing is the decision to act, the rest is merely tenacity.", "Amelia Earhart"],
  
    ["Every strike brings me closer to the next home run.", "Babe Ruth"],
  
    ["Definiteness of purpose is the starting point of all achievement.", "W. Clement Stone"],
  
    ["Life isn`t about getting and having, it`s about giving and being.", "Kevin Kruse"],
  
    ["Life is what happens to you while you`re busy making other plans.", "John Lennon"],
  
    ["We become what we think about.", "Earl Nightingale"],
  
    ["Twenty years from now you will be more disappointed by the things that you didn`t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "Mark Twain"],
  
    ["Life is 10% what happens to me and 90% of how I react to it.", "Charles Swindoll"],
  
    ["The most common way people give up their power is by thinking they don`t have any.", "Alice Walker"],
  
    ["The mind is everything. What you think you become.", "Buddha"],
  
    ["The best time to plant a tree was 20 years ago. The second best time is now.", "Chinese Proverb"],
  
    ["Success is not final; failure is not fatal: It is the courage to continue that counts.", "Winston S. Churchill"],
  
    ["Eighty percent of success is showing up.", "Woody Allen"],
  
    ["Your time is limited, so don`t waste it living someone else`s life.", "Steve Jobs"],
  
    ["Winning isn`t everything, but wanting to win is.", "Vince Lombardi"],
  
    ["I am not a product of my circumstances. I am a product of my decisions.", "Stephen Covey"],
  
    ["There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.", "Mister Rogers"],
  
    ["I`ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou"],
  
    ["Either you run the day, or the day runs you", "Jim Rohn"],
  
    ["Whether you think you can or you think you can`t, you`re right", "Henry Ford"],
  
    ["Success is getting what you want, happiness is wanting what you get.", "W. P. Kinsella"],
  
    ["Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.", "Johann Wolfgang von Goethe"],
  
    ["The best revenge is massive success.", "Frank Sinatra"],
  
    ["People often say that motivation doesn`t last. Well, neither does bathing. That`s why we recommend it daily.", "Zig Ziglar"],
  
    ["Life shrinks or expands in proportion to one`s courage.", "Anais Nin"],

    ["Don`t let yesterday take up too much of today.", "Will Rogers"],
  
    ["Goal setting is the secret to a compelling future.", "Tony Robbins"],
  
    ["Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", "Jesus"],

    ["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"],
  
    ["Go confidently in the direction of your dreams.  Live the life you have imagined. ", "Henry David Thoreau"],
  
    ["When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", "Erma Bombeck"],
  
    ["You learn more from failure than from success. Don`t let it stop you. Failure builds character.", "Unknown"],
  
    ["Certain things catch your eye, but pursue only those that capture the heart.", "Ancient Indian Proverb"],
  
    ["Believe you can and you`re halfway there.", "Theodore Roosevelt"],
  
    ["Everything you`ve ever wanted is on the other side of fear.", "George Addair"],
  
    ["Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.", "Alexander Graham Bell"],
  
    ["Teach thy tongue to say, `I do not know,` and thous shalt progress.", "Maimonides"],
  
    ["Start where you are. Use what you have.  Do what you can.", "Arthur Ashe"],
  
    ["I`m a greater believer in luck, and I find the harder I work the more I have of it.", "Thomas Jefferson"],
  
    ["Fall seven times and stand up eight.", "Japanese Proverb"],
  
    ["When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", "Helen Keller"],
  
    ["Everything has beauty, but not everyone can see.", "Confucius"],
  
    ["How wonderful it is that nobody need wait a single moment before starting to improve the world.", "Anne Frank"],
  
    ["When I let go of what I am, I become what I might be.", "Lao Tzu"],
  
    ["Life is not measured by the number of breaths we take, but by the moments that take our breath away.", "Maya Angelou"],
  
    ["Happiness is not something readymade.  It comes from your own actions.", "Dalai Lama"],
  
    ["If you`re offered a seat on a rocket ship, don`t ask what seat! Just get on.", "Sheryl Sandberg"],
  
    ["It`s not about better time management. It`s about better life management", "Alexandra of The Productivity Zone"],
  
    ["If the wind will not serve, take to the oars.", "Latin Proverb"],
  
    ["You can`t fall if you don`t climb.  But there`s no joy in living your whole life on the ground.", "Unknown"],
  
    ["We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.", "Marie Curie"],
  
    ["The hardest choices require the strongest wills.", "Thanos"],
  
    ["Challenges are what make life interesting and overcoming them is what makes life meaningful.", "Joshua J. Marine"],
  
    ["If you want to lift yourself up, lift up someone else.", "Booker T. Washington"],
  
    ["It's not about how much we lost. It's about how much we have left.", "Iron Man"],
  
    ["Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.", "Jamie Paolinetti"],
  
    ["How is never as important as why", "Namor"],
  
    ["At some point, we all have to choose, between what the world wants you to be, and who you are.", "Natasha Romanoff"],
  
    ["I didn`t fail the test. I just found 100 ways to do it wrong.", "Benjamin Franklin"],
  
    ["A person who never made a mistake never tried anything new.", "Albert Einstein"],
  
    ["The person who says it cannot be done should not interrupt the person who is doing it.", "Chinese Proverb"],
  
    ["There are no traffic jams along the extra mile.", "Roger Staubach"],
  
    ["It is never too late to be what you might have been.", "George Eliot"],
  
    ["You become what you believe.", "Oprah Winfrey"],

    ["I would rather die of passion than of boredom.", "Vincent van Gogh"],
  
    ["A truly rich man is one whose children run into his arms when his hands are empty.", "Unknown"],
  
    ["Just because something works, doesn't mean it can't be improved.", "Shuri"],
  
    ["No amount of money ever bought a second of time.", "Tony Stark"],
  
    ["Build your own dreams, or someone else will hire you to build theirs.", "Farrah Gray"],
  
    ["I choose to run towards my problems, and not away from them. Because`s that what heroes do", "Thor"],
  
    ["Faith is my sword. Truth is my shield. Knowledge my armor.", "Stephen Strange"],
  
    ["I have learned over the years that when one`s mind is made up, this diminishes fear.", "Rosa Parks"],
  
    ["It does not matter how slowly you go as long as you do not stop.", "Confucius"]
  ];

  $(function() {
    $('.pop-up').hide();
    $('.pop-up').fadeIn(1000);
    
        $('.close-button').click(function (e) { 
  
        $('.pop-up').fadeOut(700);
        $('#overlay').removeClass('blur-in');
        $('#overlay').addClass('blur-out');
        e.stopPropagation();
          
      });
   });


