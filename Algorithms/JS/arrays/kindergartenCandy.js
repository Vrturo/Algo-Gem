def  distributeCandy( score)
    if (score == nil || score.length == 0)
        return 0
    end

    candies = Array.new(score.length, 1)

    for i in 0...score.length
        if score[i] > score[i - 1]
            candies[i] = candies[i - 1] += 1
        else
            candies[i] = 1
        end
    end


    result = candies[score.length - 1]

    (score.length-2).downto(0) do |j|
        current = 1
        if score[j] > score[j + 1]
            current = candies[j + 1] + 1
        elsif (score[j] == score[j + 1] && candies[j] < candies[j + 1])
            current = candies[j+1]
        end
        candies[j] = [current, candies[j]].max
        result += candies[j]
     end
    return result
end