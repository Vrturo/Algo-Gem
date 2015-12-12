# overwrite the Array class
# with different algorithms

# "self" is the array
class Array

  def selection_sort
    sorted = Array.new
    self.length.times do
      sorted.push(self.delete(self.min))
    end
    return sorted
  end

  def quicksort
  # You need a base case, otherwise your recursive calls never terminate
    if self.length <= 1
      return self
    # Now pick a pivot:
    else
      pivot = self.sample
      self.delete_at(self.index(pivot)) # remove the pivot
      puts "Picked pivot of: #{pivot}"
      less = []
      greater = []
  # Loop through the array, comparing items to pivot and collecting them into less and greater arrays.
      self.each do |x|
        if x <= pivot
          less << x
        else
          greater << x
        end
  # Now, recursively call self.quicksort on your less and greater arrays.
      end
      sorted_array = []
      sorted_array << less.quicksort
      sorted_array << pivot
      sorted_array << greater.quicksort
      # Return the sorted_array and you're done.
      # using Array.flatten to remove subarrays
      sorted_array.flatten!
    end
  end

  def insertion_sort
    # Efficient for small number of elements
    final = [self[0]]
    self.delete_at(0)
    # main code
    for i in self
        final_index = 0
        while final_index < final.length
            if i <= final[final_index]
                final.insert(final_index,i)
                break
            elsif final_index == final.length-1
                final.insert(final_index+1,i)
                break
            end
            final_index+=1
        end
    end
    # output
    final
  end

end
