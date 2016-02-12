# Write a function condense_meeting_times that takes an array of meeting time ranges and returns an array of condensed ranges.
 # a meeting is stored as arrays of integers [start_time, end_time].
 # These integers represent the number of 30-minute blocks past 9:00am.

def merge_ranges(meetings)

# sort by start times, breaking ties with end times
    sorted_meetings = meetings.sort

    # meetings only go in merged_meetings when we're sure they can't be merged further
    merged_meetings = []

    previous_meeting_start, previous_meeting_end = sorted_meetings[0]

    sorted_meetings[1..-1].each do |current_meeting_start, current_meeting_end|

        # if the previous meeting can be merged with the current one
        # that is, if current meeting starts before previous meeting ends:
        if current_meeting_start <= previous_meeting_end

            # merge the current_meeting back into the previous_meeting
            # and keep the resulting meeting as the previous_meeting
            # because this newly-merged meeting might still
            # need to be merged with the next meeting
            previous_meeting_end = [current_meeting_end, previous_meeting_end].max

        # else the previous meeting can't be merged with anything else
        else

            # put it in merged_meetings
            # and move on to trying to merge the current meeting into subsequent meetings
            merged_meetings.push([previous_meeting_start, previous_meeting_end])
            previous_meeting_start, previous_meeting_end = \
                current_meeting_start, current_meeting_end
        end
    end

    # put last meeting we were trying to merge in our final set
    merged_meetings.push([previous_meeting_start, previous_meeting_end])

    return merged_meetings

end

#Complexity
#O(nlgn) time and O(n)O(n) space.

#sort method = O(nlgn)
#if not for sort O(n)
