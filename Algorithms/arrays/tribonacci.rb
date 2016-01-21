# Fibonacci's bigger brother, AKA Tribonacci.

# As the name may already reveal, it works basically like a Fibonacci,
# but summing the last 3 (instead of 2) numbers of the sequence to generate the next.

# So, if we are to start our Tribonacci sequence with [1,1,1] as a starting input (AKA signature),
# we have this sequence:

# [1,1,1,3,5,9,17,31,...]
# But what if we started with [0,0,1] as a signature? As starting with [0,1] instead of [1,1]
# basically shifts the common Fibonacci sequence by once place,
# you may be tempted to think that we would get the same sequence shifted by 2 places,
# but that is not the case and we would get:

# [0,0,1,1,2,4,7,13,24,...]
# Well, you may have guessed it by now, but to be clear:
# you need to create a fibonacci function that given a signature array/list,
# returns the first n elements - signature included of the so seeded sequence.

# Signature will always contain 3 numbers; n will always be a non-negative number;
# be ready for anything else which is not clearly specified ;)

# def tribonacci(s, n)
#   for i in 3..n
#     s[i] = s[i-1] + s[i-2] + s[i-3]
#   end
#   return s.slice(0, n)
# end

# def tribonacci(sign,n)
#   while sign.length<n
#     sign+=[sign[-3]+sign[-2]+sign[-1]]
#   end
#   return sign[0,n]
# end

# def tribonacci(signature,n)
#   if n == 0
#     return []
#   elsif n < 3
#       return [signature[n]]
#   else
#       for i in 1..n - 3
#         new_sum = signature[signature.length - 3...signature.length].reduce(:+)
#         signature << new_sum
#       end
#       signature
#    end
# end
