// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD OR EDIT QUOTES
// ─────────────────────────────────────────────────────────────────────────────
// Each quote is a block of text separated by a blank line.
// The last line of each block is the author, starting with a dash (-).
// Use just a dash (-) for anonymous quotes.
// Example:
//
//   This is my quote text.
//   -Author Name
//
//   Another quote here.
//   -
//
// ─────────────────────────────────────────────────────────────────────────────

const QUOTES_RAW = `
Do not overestimate what you can achieve in a day. Do not underestimate what you can achieve in a year.
-

It's the person that is ultimately successful, regardless of school attended.
-

People forget what you say, but remember how you made them feel.
-Warren Beatty

The person who clears the path ultimately controls its direction.
-

Nearly everyone dies before they are ready.
-

Many a false step was made by standing still.
-Fortune Cookie

Action may not always bring happiness, but there is no happiness without action.
-

I am an old man and have known a great many troubles, but most of them never happened.
-

What we fear doing most is usually what we most need to do.
-

Don't panic. Let the silence do the work.
-

Listening is about being present, not just being quiet.
-

A fearless adventure in knowing what to do when no one's there telling you what to do.
-

The world is changed by your example, not your idea.
-

The limits of my language mean the limits of my world.
-Ludwig Wittgenstein

If you respond, do not over-apologize. Some version of "I see you" will diffuse at least 80% of people who appear to be haters or would-be haters.
-

Trying to get everyone to like you is a sign of mediocrity. You'll avoid the tough decisions, and you'll avoid confronting the people who need to be confronted.
-Colin Powell

You can't reason someone out of something they didn't reason themselves into.
-

If you want to improve, be content to be thought foolish and stupid.
-Epictetus

Living well is the best revenge.
-George Herbert

Those who are offended easily should be offended more often.
-

Get used to the harshness of a world in which injustice is a tough opponent.
-

How many players hailed as future heroes had disappeared at the first setback?
-

If one day you stop getting hit, you'll know you aren't as good anymore.
-

If you spent too much time thinking about these things, you would never take any significant steps.
-

Believe in yourself more deeply. You're bigger than that. Dream bigger.
-

If you want to be successful, surround yourself with people who are more successful than you are, but if you want to be happy, surround yourself with people who are less successful than you are.
-

In any situation in life, you only have three options. You can change it, you can accept it, or you can leave it.
-

Desire is a contract you make with yourself to be unhappy until you get what you want.
-

Be present above all else.
-

Desire is suffering.
-Buddha

Anger is a hot coal that you hold in your hand while waiting to throw it at someone else.
-Buddha

If you can't see yourself working with someone for life, don't work with them for a day.
-

Praise specifically, criticize generally.
-

Watch every thought. Always ask: why am I having this thought?
-

All greatness comes from suffering.
-

What you choose to work on, and who you choose to work with, are far more important than how hard you work.
-

We waste our time with short-term thinking and busywork. Warren Buffett spends a year deciding and a day acting. That act lasts decades.
-

You get paid for being right first, and to be first, you can't wait for consensus.
-

There are no adults. Everyone's making it up as they go along. Figure it out yourself, and do it.
-

The key in any kind of high-pressure situation is that 75% of success is staying calm and not losing your nerve.
-

Passion comes from a combination of being open and curious, and of really going all-in when you find something that you're interested in.
-

You want to be taken seriously? Then take things seriously!
-

Competition is overrated.
-Peter Thiel

Everyone's equal on stage, but off stage, they're completely unequal.
-

Don't be scared. Nobody gives a crap what you do.
-

How you do anything is how you do everything.
-

Who do you pick when your ego seems threatened? The ones on the steepest growth curve look for the hardest guys — the ones who might beat them up.
-

Most of us are afraid and brave at the exact same moment, all day long.
-

The hero and the coward both feel the same thing, but the hero uses his fear, projects it onto his opponent, while the coward runs.
-

Give vulnerability a shot. Give discomfort its due. He or she who is willing to be the most uncomfortable is not only the bravest, but rises the fastest.
-

The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly, who errs, who comes short again and again, because there is no effort without error and shortcoming.
-Theodore Roosevelt

I do want to live a brave life. I do want to live in the arena. And if you're going to live in the arena, the only guarantee is you will get your ass kicked.
-

Did I dare greatly today?
-

When I had the opportunity, did I choose courage over comfort?
-

If I'm not a little bit nauseous when I'm done, I probably did not show up like I should have shown up.
-

You can't really earn trust over time with people without being somewhat vulnerable first.
-

Be clear that your ladder is leaning against the right building.
-

It's okay to be afraid. You don't have to be so scary when you're scared.
-

What are the worst things that could happen? Could I get back from there?
-

To get huge, good things done, you need to be okay with letting the small, bad things happen.
-

People's IQs seem to double as soon as you give them responsibility and indicate that you trust them.
-

Spend time hunting antelope instead of chasing mice.
-

What would this look like if it were easy?
-

Slow is smooth, smooth is fast.
-Navy SEAL

What's on the other side of fear? Nothing.
-

You are either great or you don't exist.
-

What will you do that will be remembered in 200 and 400 years?
-

Life is not waiting for the storm to pass, it's learning how to dance in the rain.
-Vivian Greene

Perhaps the biggest tragedy in our lives is that freedom is possible, yet we can pass our years trapped in the same old patterns.
-

You have to act first before inspiration will hit.
-

The simple willingness to improvise is more vital, in the long run, than research.
-Rolf Potts

You must want to be a butterfly so badly, you are willing to give up being a caterpillar.
-Sekou Andrews

Learn the rules like a pro, so you can break them like an artist.
-Pablo Picasso

We suffer more often in imagination than in reality.
-Seneca

Easy choices, hard life. Hard choices, easy life.
-Jerzy Gregorek

Stop thinking the world is a just place.
-

There is only one way to become more effective in building power and using influence: practice.
-

As long as you keep your boss or bosses happy, performance really does not matter that much.
-

Power is part of leadership and is necessary to get things done.
-

Worry about the relationship with your boss at least as much as you worry about your job performance.
-

Your job is to ensure those influential others have a strong desire to make you successful.
-

Although it is desirable to be both loved and feared, if you have to pick only one, pick fear if you want to get and keep power.
-

Standing out helps you get the jobs and power you seek.
-

Having resources is an important source of power only if you use those resources strategically to help others whose support you need.
-

Being nice to people is effective because people find it difficult to fight with those who are being polite and courteous.
-

Most people like to talk about themselves — give them the opportunity to do so.
-

Out of sight, out of mind.
-

Networking makes you more visible; this visibility increases your power and status.
-

The secret of leadership is the ability to play a role, to pretend, to be skilled in the theatrical arts.
-

Authority is 20 percent given, 80 percent taken.
-

If you act confident, you become more confident.
-

After a while, what started out being an act becomes less so. Attitudes follow behavior.
-

You are on stage more than you think.
-

A bad temper is a very powerful political tool because most people don't like confrontation.
-

Looking people directly in the eye connotes not only power but also honesty and directness.
-

Take your time in responding.
-

In conversations, interrupting others — although not polite — can indicate power.
-

If you make people laugh, you can tell them anything.
-

Perception is reality.
-

You get only one chance to make a first impression.
-

People start forming impressions of you in the first few seconds or even milliseconds of contact.
-

Impressions and reputations endure.
-

Image creates reality.
-

Conflict can be an opportunity for another person's education.
-

Particularly in a leadership position, it is irresponsible to avoid people with whom you have disagreements.
-

To be successful, you have to get over resentments, jealousies, anger, or anything else that might get in the way of building a relationship.
-

Don't wait if you see a power struggle coming. While you are waiting, others are organising support.
-

Place your own objectives in a broader context that compels others to support you.
-

Most successful people have encountered setbacks along the way, and survived.
-

The best way to overcome the embarrassment is to talk about what happened to as many people as possible as quickly as possible.
-

The ability to act as if you will win becomes a self-fulfilling prophecy.
-

You want to convey that everything is fine and under your control, even under dire circumstances. People want to associate with winners.
-

Either you learn the skills now and grow, or learn the skills in your 50s and then retire without achievement.
-

People keep away the power by not trying. But not trying guarantees failure to win the competition for power and status.
-

When we stop thinking of ourselves as powerless victims, our chances of success increases dramatically.
-

Take care of yourself. Don't expect justice.
-

If you don't stand up for yourself and actively promote your own interests, few will be willing to be on your side.
-

It's up to you to build your own path to power.
-

Seek power as your life depends on it.
-

Use definitive, specific, concrete language.
-

Be a pro at turning a brief conversation into one of substance, by contributing one or two unique ideas in a short period of time.
-

It's easier to get to know people when they're not famous; that when they do become famous, you already have a relationship with them.
-

Three things are important in building and maintaining a network: access to people, performance, and consistency in your actions.
-Heidi Roizen

My popularity, my happiness, and my sense of worth depend to no small extent upon my skill in dealing with people.
-

If you want to gather honey, don't kick over the beehive.
-

By criticizing, we do not make lasting changes, and often incur resentment.
-

When dealing with people, we are not dealing with creatures of logic. We are dealing with creatures of emotion, bristling with prejudices and motivated by pride and vanity.
-

The deepest urge in human nature is the desire to be important.
-John Dewey

I consider my ability to arouse enthusiasm among my people the greatest asset I possess, and the way to develop the best that is in a person is by appreciation and encouragement.
-Charles Schwab

The only way on earth to influence other people is to talk about what they want and show them how to get it.
-

You can make more friends in two months by becoming interested in people than you can in two years by trying to get people interested in you.
-

We are interested in others when they are interested in us.
-

A person's name is to that person the sweetest and most important sound in any language.
-

Ask questions that other persons will enjoy answering, e.g. about themselves or their accomplishments.
-

Be a good listener. Encourage others to talk about themselves.
-

Talk in terms of other person's interests.
-

Always make the other person feel important.
-

Almost all the people you meet feel themselves superior to you in some way, and a sure path to their hearts is to let them realize in some subtle way that you recognise their importance, and recognise it sincerely.
-

You can't win an argument. You can't because if you lose it, you lost it; and if you win it, you lose it.
-

A man convinced against his will is of the same opinion still.
-

If you are going to prove anything, don't let anybody know it. Do it so subtly, so adroitly, that no one will feel that you are doing it.
-

You cannot teach a man anything; you can only help him to find it within himself.
-

Few people are logical. Most of us are prejudiced and biased. Most of us are blighted with preconceived notions, with jealousy, suspicion, fear, envy, and pride.
-

Be diplomatic, it will help you make your point.
-

Never say "You're wrong."
-

Admit our mistakes quickly and with enthusiasm.
-

In talking with people, do not begin by discussing the things on which you differ. Begin by emphasising the things on which you agree.
-

Get the other person saying "Yes, yes" at the outset. Keep your opponent, if possible, from saying "No."
-

People can't be sold things. You have to let them buy.
-

Let the other person feel that the idea is his or hers.
-

Remember that other people may be totally wrong. But they don't think so.
-

A person usually has two reasons for doing a thing: one that sounds good and a real one.
-

It is always easier to listen to unpleasant things after we have heard some praise of our good points.
-

An effective way to correct others' mistakes is to call attention to people's mistakes indirectly.
-

A good leader talks about his own mistakes before criticizing the other person.
-

Let the other person save face. What matters is not what I think of him, but what he thinks of himself.
-

Everybody likes to be praised, but when praise is specific, it comes across as sincere.
-

If you want to influence a person in a certain respect, act as though that particular trait was already one of his outstanding characteristics.
-

Change people without giving offense or arousing resentment, and help others improve by using encouragement.
-

Learn to speak effectively. Prepare for leadership.
-

The ability to speak is a shortcut to distinction. The person who can speak acceptably is usually given credit for an ability out of all proportion to what he really possesses.
-

The way to develop self-confidence is to do the thing you fear to do and get a record of successful experiences behind you.
-

It's not what you say, it's what people hear.
-

Real networking is about finding ways to make other people more successful.
-

Relationships are more like muscles — the more you work them, the stronger they become.
-

It's better to give before you receive. And never keep score.
-

Each of us is now a brand.
-

A dream with a deadline.
-

Audacity is often the only thing that separates two equally talented men and their job titles.
-

The choice isn't between success and failure; it's between choosing risk and striving for greatness, or risking nothing and being certain of mediocrity.
-

Fail, fail again. Fail better.
-

Your goal is to transform what could be a forgettable encounter into a blossoming friendship.
-

You're never going to be completely ready to meet new people; there is no perfect moment.
-

If you don't believe you are going to get what you want from the call, you probably won't.
-

Selling is in essence solving another person's problems.
-

Invisibility is a fate far worse than failure.
-

In building a network, remember: above all, never ever disappear.
-

You have to work hard to be successful at reaching out to others, but that doesn't mean you have to work long.
-

Behind any successful person stands a long string of failures.
-

You make your own luck.
-

Friendship is created out of the quality of time between two people, not the quantity.
-

Follow up is the key to success in any field.
-

Don't remind them of what they can do for you; instead, focus on what you might be able to do for them.
-

Smart salespeople, employees, and business owners spend 80 percent of their time building strong relationships with the people they do business with.
-

Giving speeches is one of the easiest and most effective ways to get yourself, your business, and your ideas seen, heard of, and remembered.
-

There is zero correlation between being the best talker and having the best ideas.
-

Charm is simply a matter of being yourself.
-

You have about ten seconds before a person decides, subconsciously, whether he or she likes you or not.
-

One should seek first to understand, then to be understood.
-

Three major motivations of most people: making money, finding love, changing the world.
-

When someone mentions a problem, try to think of solutions. No time to linger. Don't wait to be asked, just do it.
-

80% of building and maintaining relationships is just staying in touch.
-

Everyone cares about his or her birthday. Make birthday calls.
-

People will always tell you what you can't do. Then they'll stand there and applaud when you do it.
-

The best online networking crosses back and forth between virtual and real without overemphasizing either.
-

Trust = generosity + vulnerability + accountability + candor.
-

The last thing you want to be in a competitive marketplace is replaceable.
-

Being known is just notoriety. But being known for something is entirely different. That's respect.
-

Creativity in business is often nothing more than making connections that everyone else has almost thought of.
-

There's no better way to learn something, and become an expert at it, than to have to teach it.
-

Good personal brands provide a credible, distinctive, and trustworthy identity.
-

In terms of branding, the bottom line for everyone comes down to a choice: to be distinct or extinct.
-

A brand is nothing less than everything everyone thinks of when they see or hear your name.
-

Most people's judgements and impressions are based on visuals. Everyone sees what you appear to be. Stand out! Style matters.
-

If you hide your accomplishments, they'll remain hidden. If you don't promote yourself, however graciously, no one else will.
-

If you are constantly apologising with "Well, I am not the expert," people will believe you.
-

As long as you're going to think anyway, think big.
-Donald Trump

Power by association: power that arises from being identified with influential people.
-

The most valuable connections you have are those you've already made at all levels.
-

To teach is to learn again.
-

The best way to approach utility is to give help first, and not ask for it.
-

The pain is temporary. Giving up lasts forever.
-

Successful CEOs stand out for decisiveness itself — the ability to make decisions with speed and conviction.
-

A potentially bad decision is better than a lack of direction.
-

Make decisions faster, make fewer decisions, and put in place practices to get better at decision making every time.
-

Make the complex simple. Successful CEOs are willing to make decisions with only 80% of the information.
-

Give a voice, not a vote. Effective decision makers actively involve others in their decision process.
-

When you are a leader, most things that go wrong are not directly your fault, but they are always your responsibility.
-

Imagine how you will feel about a decision in 10 minutes, 10 months, and 10 years.
-

Being too "nice" can get you fired.
-

Conflict avoidance leads to backdoor politicking and tolerance of mediocrity.
-

Any message has to be repeated seven different ways before an organization has any hope of hearing it.
-

If I am not uncomfortable, then I am probably not learning or changing fast enough.
-

You're not going to win every time. You might not even win most of the time. How do you bounce back?
-

Your career trajectory is the output of two factors that have a multiplying effect: getting results in the right roles and getting noticed for those results.
-

Don't look at your career as a succession of jobs to land; instead, look at your decisions as a portfolio of experiences to build.
-

Take the job no one wants.
-

These leaders proactively sought out opportunities to take on a new large challenge before they felt fully prepared or ready.
-

If you see a big leap opportunity, seize it, whatever your experience or fears.
-

Having several different kinds of blowups in a career does not disqualify you as a potential CEO. Having the same blowup over and over does.
-

The earlier a blowup comes in your career, the lower it costs.
-

Too many potential leaders make the mistake of hesitating to take ownership for a blowup.
-

The relationships and visibility you build with the right people in the right way matter as much as the results you achieve.
-

Get great things done, and get noticed for them.
-

Build your tribe. Rather than passively waiting for your luck, you can proactively create sponsors.
-

Build a bonfire. Intentionally focusing your relationship-building efforts is critical. Decide where to invest your time and energy to build a critical mass of relationships.
-

If you're not comfortable rocking the boat, you're probably not on the road to becoming a CEO.
-

The people who ultimately get picked are those who lead with fierce competence delivered with genuine warmth.
-

Colloquial, down-to-earth storytelling, drawing on memorable results, is vastly more powerful than a cerebral, academic style.
-

The only thing worse than not getting the job is getting the wrong job.
-

Learn from the mistakes of others, or you may not be in the job long enough to make all yourself.
-

As CEO, everything you do is amplified.
-

Every day you are tested. The one thing utterly within your control is showing up in your absolute best condition to perform and win.
-

Build disciplined rituals and routines that keep you consistent and grounded and that simplify life.
-

Protect your identity from theft. Invest time in nurturing aspects of yourself that are unrelated to your job or status.
-

People issues are like fish rather than fine wines: the problems you see on your team now are not going to improve with age.
-

Trust is built on alignment of interest, credibility, and familiarity.
-

In silence, people assume the worst.
-

Avoid surprises!
-

Constantly look for mentors, wherever you can find them, and be willing to hear their feedback.
-Stanford GSB

If you can dream it, you must do it.
-

Some people will walk straight ahead into uncertainty.
-Phil Knight

I want to measure my life by the lives I've impacted and touched.
-

Surround yourself with people who raise you higher.
-

There are three stages to a leader's career. First, you're known for what you can do. Second, you're known for what you know. Third, people want to follow you because of who you are.
-

Don't settle.
-Steve Jobs

Make the person you're talking to feel like the most important one in the room.
-Bill Clinton

Be for something. And fight for it.
-

Feel comfortable with everyone.
-

Convey warmth as well as competence.
-

80% of what people want is just to feel heard.
-

Non-defensiveness: "you can either be right, or have relationships — not both."
-

Emotional awareness and control is greater than emotional suppression and ignorance.
-

Question every requirement. Delete every possible step. Simplify and optimize. Accelerate cycle time. Automate.
-Elon Musk

Sleep is not the end of the day. It is the beginning of tomorrow.
-

Minimum viable communication: fewest words that give an effective communication.
-

Communication equals leadership.
-

Strategic Communication: First and final words matter most.
-

Strategic Communication: Be slower than you think.
-

You don't look as nervous as you feel.
-

Start with something interesting. Introduce the unexpected.
-

There are only two types of speakers in the world: the nervous, and the liars.
-Mark Twain

See the presentation as a conversation.
-

The audience don't know you made a mistake until you tell them.
-

Focus on enunciation over speed.
-

Leadership effectiveness follows an inverted U-shape with assertiveness. Too little is bad. Too much is bad. Moderate assertiveness is best.
-

Disclosing and sharing publicly increases trust from others.
-

Relationships function like bank accounts with deposits and withdrawals.
-

Suppressing feelings doesn't make them go away.
-

Know when to fight and when to walk away.
-Joel Peterson

If you want others to follow, learn to be alone with your thoughts.
-

Prepare conversations. Rule of 10: 10x the conversation time spent in preparation.
-

Being a real leader: it is not about you.
-

Know what winning looks like before stepping into the conversation.
-

For difficult conversations, engage early and escalate later.
-

Being direct is not equal to being unkind.
-

There's no such thing as the perfect job.
-Irving Grousbeck

Reject cynicism, plan long, write short.
-Rachel Konrad

5 big life decisions: those with a clear North Star had better filters for decision-making and achieved greater success and happiness.
-

Cannot outperform weaknesses — focus 80% of time on strengths, 20% on weaknesses.
-

You're always juggling many balls in life, but a few are crystal — if you drop them they break, so you must know which they are and protect them.
-

Gaining influence is like training muscles.
-

Take your space sooner and voice sooner.
-

Know your words before saying them. Be clear and concise.
-

Notice your pace and non-verbal language. This can make you confident.
-

Careers are mazes, not flight plans.
-

Seek contrasting views.
-

Don't lunge for money.
-

Invest in relationships. The deeper relationships you have, the more control over your destiny you have in the future.
-

Know what you don't know so that you can be proactive about trying to fill in the gaps.
-

Self doubt and worry were common daily thoughts even as people are succeeding — no perfect life.
-

The ability to accept failure and criticism as part of your life journey is what allows successful individuals to take calculated risks.
-

Good judgement comes from experience, experience comes from bad judgement.
-

Act as if someone is always watching.
-

Die young as late as possible.
-

If this scares me, it must be important.
-

Needing to be liked or to please others is selfish.
-

Confidence is 60% right, 40% wrong.
-

You can gain power within an organization by showing passionate commitment rather than cool indifference.
-

A break is like inhaling before exhaling.
-

Don't overthink "what if" — do it.
-

Having a platform is important.
-Keith Hennessey

At your new job, find a role model and mimic him until you know the job well.
-Keith Hennessey

Reputation among peers is important.
-Keith Hennessey

Have 3–6 coaches or mentors. Do a kitchen cabinet once a quarter.
-Keith Hennessey

There's no "they." If "they" should do something, it's YOU that should do something.
-Keith Hennessey

If I can breathe, I can think.
-

When I slow down, I sound smarter.
-

Pause for effect.
-

Stories are more memorable than data.
-

General interview mantra: "I can help you."
-

Power up — clear pronunciation of consonants.
-

Weak ties create more opportunities than strong ties.
-

Negotiation power depends primarily on your BATNA — Best Alternative to a Negotiated Agreement.
-

Even if you don't think you're negotiating a relationship, you're negotiating a relationship.
-

Participation is a learned behavior.
-

Leaders emerge in every team.
-

Dare to be dull.
-

Let go of perfection, go for connection.
-

Paraphrasing connects people.
-

Losses are more painful than gains are pleasurable.
-

We make up our minds quickly. Once made, these assessments are hard to disrupt. First impressions affect a host of important consequences.
-

Attractive people receive more votes in political contests, better grades at school, and shorter prison sentences. Appearances matter.
-

Direct supervisors have the most influence over employee motivation — not peers, subordinates, or even the highest-ranking leaders.
-

People want to understand how their work contributes to a larger cause.
-

Compromise is for losers.
-

Talk about interests, not positions.
-

When everyone else is doing it, people's inner conformist is stronger than their inner activist.
-

Choose a game that stirs up your blood.
-

Design a winnable game: what do customers hate about this industry? What is a problem that breaks your heart? What are your competitors unwilling to do?
-

You will have a higher probability of achieving an inspirational goal than a modest one.
-

When you choose a goal that stirs your blood, a part of you assumes the identity of someone who has already achieved that goal.
-

Whatever you're going through, someone is dealing with something worse.
-

There is no long-term certainty — just start rolling.
-

Execution and discipline are everything.
-

Stick with your proven approach. The rarest trait of all among investors is the ability to live through volatility without changing your investment thought process.
-Mark Sellers

Read one more article, study one more financial document, find one more person to talk to. You may learn something that puts an entirely new light on the investment question at hand.
-

Opportunity is missed by most people because it is dressed in overalls and looks like work.
-Thomas Edison

Don't expect to get rich quick. Time plus compounding is the most powerful weapon in the capitalist's arsenal. Take advantage of it.
-

Love your work. Pick work that gives you the greatest enjoyment. That will give you the richest and most enjoyable life.
-

Superstars commit to mastery of fundamentals — great investors, athletes, musicians — virtually everything.
-

Distinguish between the decision process and outcomes. Stick to the process.
-

I am a good politician.
-

I can lead a large team.
-

I can speak well, very well.
-

I am a leader.
-

I am confident all the time.
-

I project confidence while talking.
-

I am chill, calm, and confident.
-

I talk slowly and confidently.
-

I do not unnecessarily self-criticize while talking.
-

I have 100% complete focus on the other person in conversations.
-

I do not project sovereignty — I am sovereign.
-

I grasp any opportunity to practice public speaking and building personal relationships.
-

I have a habit of leadership.
-

I am prepared to act, sound, and feel like an expert.
-

I take time speaking.
-

I am calm and calm is contagious.
-

I never appear stressed.
-

I speak with my stomach instead of my throat.
-

I treat family members better than others.
-

I deserve it. That is not too risky.
-

I am going to fail, but eventually I will succeed.
-

I can handle it!
-

I have a succinct communication style.
-

I want to grow as fast as I can now so that I can do what I want as soon as possible.
-

I can command a room.
-

My words land best when they're unhurried.
-

I am becoming the investor I admire.
-

I breathe first, then speak.
-

I never regret being calm, but I regret times that I went too emotional.
-Jim Ellis

Everyday leadership: showing leadership to the people you lead every day, not just on performance review day.
-

Closing the loop really matters in business. Business is a long-term relationship.
-

People appreciate that others take the step to show up for the heated conversation.
-

Don't try to stick to or force a solution when it is hot and heated.
-

Sharing facts instead of opinions is an approach for difficult conversations.
-

Conversations with fellow board members: "Despite a lot of differences between us, I do have an equal right to deal with this issue."
-

Feel the feelings.
-

Anger is the surface of the deepest form of compassion, the purest form of care.
-David Whyte

Reject cynicism.
-

Careers are mazes, not ladders.
-

GSB learnings: you can have it all, but not all at the same time.
-

GSB learnings: phone calls still matter, professionally and personally.
-

GSB learnings: meeting in person matters.
-

GSB learnings: stay in touch with people, but not transactionally.
-

GSB learnings: make friends from different generations.
-

GSB learnings: be a heads-up person — don't bury yourself in the phone.
-

GSB learnings: RSVP and do not flake.
-

GSB learnings: be a bucket filler.
-

GSB learnings: be the type of friend that people share good news with.
-

GSB learnings: read fiction. It helps understand others in different contexts.
-

GSB learnings: no regrets. Gratitude.
-

GSB learnings: make sure you're having fun despite the busyness.
-

GSB learnings: commit to lifelong learning — industry knowledge, functional knowledge, management skills.
-

GSB learnings: do what resonates with you, not what you should do.
-

GSB learnings: never underestimate your classmates or yourself.
-

GSB learnings: be the boss nobody wants to leave.
-

GSB learnings: move from failure to failure with enthusiasm.
-

GSB learnings: people do business with people they like.
-

GSB learnings: give handwritten thank-you notes.
-

GSB learnings: confident humility.
-

GSB learnings: find people who you enjoy, share your values, and complement you.
-

GSB learnings: work isn't work. It's fun.
-

Break the rules — power comes to those willing to bend or break norms. Ask forgiveness rather than permission.
-

Personal change is possible — building power is not about personality, but behavior, skills, and actions.
-

Power is the obverse of dependence. Avoid dependence as much as possible — always have options.
-

Success excuses almost everything.
-

Dedicated to things that haven't happened yet and the people who are about to dream them up.
-Stanford GSB

The investment market is a land of 1,000 sub-market niches. Find yours and stick to it.
-

Anyone with the proper commitment and personal focus can make high enough returns as an investor to build a satisfactory independent net worth.
-

There is absolutely no correlation between high intelligence and money management success. Investing is not a game where the guy with the 160 IQ beats the guy with the 130 IQ.
-Warren Buffett

A decision to not sell at a current price should be considered a decision to re-buy at that price.
-

5 big life lessons: the ability to accept failure and criticism as part of your life journey is what allows successful individuals to take calculated risks and perform better under pressure.
-

Touchy Feely: leaders who don't listen will eventually be surrounded by people who have nothing to say.
-

Touchy Feely: in order to empathize with someone's experience you must be willing to believe them as they see it and not how you imagine their experience to be.
-

Touchy Feely: influencing is a two-way process.
-

Have content of character.
-Joel Peterson

Move from failure to failure with enthusiasm.
-

80% of success is showing up.
-

Don't give up before you begin.
-
`;

function parseQuotes(text) {
  const quotes = [];
  const blocks = text.trim().split(/\n{2,}/);

  for (const block of blocks) {
    const lines = block.trim().split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    const lastLine = lines[lines.length - 1];
    let author = '';
    let textLines = lines;

    if (lastLine.startsWith('-')) {
      author = lastLine.slice(1).trim();
      textLines = lines.slice(0, -1);
    }

    const quoteText = textLines.join(' ').trim();
    if (quoteText.length > 3) {
      quotes.push({ text: quoteText, author });
    }
  }

  return quotes;
}

const quotes = parseQuotes(QUOTES_RAW);
