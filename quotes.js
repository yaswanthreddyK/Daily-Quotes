const QUOTES = [
  {"quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
  {"quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
  {"quote": "In three words I can sum up everything I've learned about life: it goes on.", "author": "Robert Frost"},
  {"quote": "The best way to predict the future is to create it.", "author": "Peter Drucker"},
  {"quote": "Your time is limited, don't waste it living someone else's life.", "author": "Steve Jobs"},
  {"quote": "Life is what happens when you're busy making other plans.", "author": "John Lennon"},
  {"quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
  {"quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein"},
  {"quote": "The only thing we have to fear is fear itself.", "author": "Franklin D. Roosevelt"},
  {"quote": "You miss 100% of the shots you don't take.", "author": "Wayne Gretzky"},
  {"quote": "The only person you are destined to become is the person you decide to be.", "author": "Ralph Waldo Emerson"},
  {"quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
  {"quote": "It always seems impossible until it's done.", "author": "Nelson Mandela"},
  {"quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
  {"quote": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
  {"quote": "Do not wait for leaders; do it alone, person to person.", "author": "Mother Teresa"},
  {"quote": "Life is really simple, but we insist on making it complicated.", "author": "Confucius"},
  {"quote": "The only true wisdom is in knowing you know nothing.", "author": "Socrates"},
  {"quote": "Happiness is not something ready-made. It comes from your own actions.", "author": "Dalai Lama"},
  {"quote": "Don't cry because it's over, smile because it happened.", "author": "Dr. Seuss"},
  {"quote": "It's not what happens to you, but how you react to it that matters.", "author": "Epictetus"},
  {"quote": "If you want to lift yourself up, lift up someone else.", "author": "Booker T. Washington"},
  {"quote": "Success is stumbling from failure to failure with no loss of enthusiasm.", "author": "Winston S. Churchill"},
  {"quote": "Be yourself; everyone else is already taken.", "author": "Oscar Wilde"},
  {"quote": "In the middle of difficulty lies opportunity.", "author": "Albert Einstein"},
  {"quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
  {"quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "author": "Nelson Mandela"},
  {"quote": "You have within you right now, everything you need to deal with whatever the world can throw at you.", "author": "Brian Tracy"},
  {"quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "author": "Ralph Waldo Emerson"},
  {"quote": "The purpose of our lives is to be happy.", "author": "Dalai Lama"},
  {"quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", "author": "Albert Schweitzer"},
  {"quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", "author": "Christian D. Larson"},
  {"quote": "The only place where success comes before work is in the dictionary.", "author": "Vidal Sassoon"},
  {"quote": "The best revenge is massive success.", "author": "Frank Sinatra"},
  {"quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
  {"quote": "Success is stumbling from failure to failure with no loss of enthusiasm.", "author": "Winston S. Churchill"},
  {"quote": "It's not whether you get knocked down, it's whether you get up.", "author": "Vince Lombardi"},
  {"quote": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", "author": "Roy T. Bennett"},
  {"quote": "Don't be afraid to give up the good to go for the great.", "author": "John D. Rockefeller"},
  {"quote": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau"},
  {"quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", "author": "Jordan Belfort"},
  {"quote": "The road to success and the road to failure are almost exactly the same.", "author": "Colin R. Davis"},
  {"quote": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", "author": "Steve Jobs"},
  {"quote": "The only thing you can control is your attitude toward the happenings in your life.", "author": "Mark Manson"},
  {"quote": "Success is not in what you have, but who you are.", "author": "Bo Bennett"},
  {"quote": "Don't count the days, make the days count.", "author": "Muhammad Ali"},
  {"quote": "Do not wait to strike until the iron is hot, but make it hot by striking.", "author": "William Butler Yeats"},
  {"quote": "Success is not just about making money. It's about making a difference.", "author": "Unknown"},
  {"quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
  {"quote": "Opportunities don't happen. You create them.", "author": "Chris Grosser"},
  {"quote": "Don’t be afraid to give up the good to go for the great.", "author": "Kenny Rogers"},
  {"quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", "author": "Jordan Belfort"},
  {"quote": "Don’t watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
  {"quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
  {"quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
  {"quote": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein"},
  {"quote": "The only way to achieve the impossible is to believe it is possible.", "author": "Charles Kingsleigh"},
  {"quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
  {"quote": "Success is not just about making money. It's about making a difference.", "author": "Unknown"},
  {"quote": "The only place where success comes before work is in the dictionary.", "author": "Vidal Sassoon"},
  {"quote": "Your time is limited, don't waste it living someone else's life.", "author": "Steve Jobs"},
  {"quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", "author": "Jordan Belfort"},
  {"quote": "Don’t be afraid to give up the good to go for the great.", "author": "John D. Rockefeller"},
  {"quote": "It always seems impossible until it's done.", "author": "Nelson Mandela"},
  {"quote": "The only person you are destined to become is the person you decide to be.", "author": "Ralph Waldo Emerson"},
  {"quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein"},
  {"quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", "author": "Christian D. Larson"},
  {"quote": "The purpose of our lives is to be happy.", "author": "Dalai Lama"},
  {"quote": "Don't cry because it's over, smile because it happened.", "author": "Dr. Seuss"},
  {"quote": "It's not what happens to you, but how you react to it that matters.", "author": "Epictetus"},
  {"quote": "Happiness is not something ready-made. It comes from your own actions.", "author": "Dalai Lama"},
  {"quote": "The best way to predict the future is to create it.", "author": "Peter Drucker"},
  {"quote": "Be yourself; everyone else is already taken.", "author": "Oscar Wilde"},
  {"quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
  {"quote": "Success is stumbling from failure to failure with no loss of enthusiasm.", "author": "Winston S. Churchill"},
  {"quote": "It's not whether you get knocked down, it's whether you get up.", "author": "Vince Lombardi"},
  {"quote": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", "author": "Roy T. Bennett"},
  {"quote": "Don't be afraid to give up the good to go for the great.", "author": "John D. Rockefeller"},
  {"quote": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau"},
  {"quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", "author": "Jordan Belfort"},
  {"quote": "The road to success and the road to failure are almost exactly the same.", "author": "Colin R. Davis"},
  {"quote": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", "author": "Steve Jobs"},
  {"quote": "The best revenge is massive success.", "author": "Frank Sinatra"},
  {"quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "author": "Ralph Waldo Emerson"},
  {"quote": "Success is not in what you have, but who you are.", "author": "Bo Bennett"},
  {"quote": "Don't count the days, make the days count.", "author": "Muhammad Ali"},
  {"quote": "Do not wait to strike until the iron is hot, but make it hot by striking.", "author": "William Butler Yeats"},
  {"quote": "Success is not just about making money. It's about making a difference.", "author": "Unknown"},
  {"quote": "Opportunities don't happen. You create them.", "author": "Chris Grosser"},
  {"quote": "Don’t be afraid to give up the good to go for the great.", "author": "Kenny Rogers"},
  {"quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", "author": "Jordan Belfort"},
  {"quote": "Don’t watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
  {"quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
  {"quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
  {"quote": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein"},
  {"quote": "The only way to achieve the impossible is to believe it is possible.", "author": "Charles Kingsleigh"},
  {"quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
  {"quote": "Success is not just about making money. It's about making a difference.", "author": "Unknown"},
  {"quote": "The only place where success comes before work is in the dictionary.", "author": "Vidal Sassoon"},
  {"quote": "Your time is limited, don't waste it living someone else's life.", "author": "Steve Jobs"},
  {"quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", "author": "Jordan Belfort"},
  {"quote": "It always seems impossible until it's done.", "author": "Nelson Mandela"},
  {"quote": "The only person you are destined to become is the person you decide to be.", "author": "Ralph Waldo Emerson"},
  {"quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein"},
  {"quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", "author": "Christian D. Larson"},
  {"quote": "The purpose of our lives is to be happy.", "author": "Dalai Lama"},
  {"quote": "Don't cry because it's over, smile because it happened.", "author": "Dr. Seuss"},
  {"quote": "It's not what happens to you, but how you react to it that matters.", "author": "Epictetus"},
  {"quote": "Happiness is not something ready-made. It comes from your own actions.", "author": "Dalai Lama"},
  {"quote": "The best way to predict the future is to create it.", "author": "Peter Drucker"},
  {"quote": "Be yourself; everyone else is already taken.", "author": "Oscar Wilde"},
  {"quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
  {"quote": "Success is stumbling from failure to failure with no loss of enthusiasm.", "author": "Winston S. Churchill"},
  {"quote": "It's not whether you get knocked down, it's whether you get up.", "author": "Vince Lombardi"},
  {"quote": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", "author": "Roy T. Bennett"},
  {"quote": "Don't be afraid to give up the good to go for the great.", "author": "John D. Rockefeller"},
  {"quote": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau"},
  {"quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", "author": "Jordan Belfort"},
  {"quote": "The road to success and the road to failure are almost exactly the same.", "author": "Colin R. Davis"},
  {"quote": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", "author": "Steve Jobs"},
  {"quote": "The best revenge is massive success.", "author": "Frank Sinatra"},
  {"quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "author": "Ralph Waldo Emerson"},
  {"quote": "Success is not in what you have, but who you are.", "author": "Bo Bennett"},
  {"quote": "Don't count the days, make the days count.", "author": "Muhammad Ali"},
  {"quote": "Do not wait to strike until the iron is hot, but make it hot by striking.", "author": "William Butler"}
]

module.exports = QUOTES