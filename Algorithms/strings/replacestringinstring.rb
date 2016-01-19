# Input
# The input consists of a single non-empty string, consisting only of uppercase English letters,
# the string's length doesn't exceed 200 characters

# Output
# Return the words of the initial song that Polycarpus used to make a dubsteb remix.
# Separate the words with a space.


# Examples
# song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
#   #  =>  WE ARE THE CHAMPIONS MY FRIEND
# WUB should be replaced by 1 space
# multiples WUB should be replaced by only 1 space
# heading or trailing spaces should be removed


# def song_decoder(song)
#   song.gsub(/(WUB)+/, ' ').strip
# end

# def song_decoder(song)
#   song.gsub('WUB', ' ').strip.squeeze(' ')
# end

# def song_decoder(song)
#   while song.include?("WUB")
#     song["WUB"]=" "
#   end
#   song.split.join(" ")
# end

# ----------UNFINISHED-----

# def song_decoder(song)
#   count = song.scan(/WUB/).length
#   count.times { song.sub!(/WUB/,' ') }
#   song.include?(" ") ? song.squeeze!(" ") : song
#   puts song
#   if song[0] == " " || song[-1] == " "
#     song.slice! 0
#     song.slice! -1
#   elsif song[-1] == " "
#     song.slice! -1
#   elsif song[0] == " "
#     song.slice! 0
#   end
#   song.squeeze(" ")
# end

# ----------------------------
