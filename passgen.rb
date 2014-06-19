#
# => Password generator
# => By Sam 'phantomofthesoup' Detnon
#

class Password

	PHRASES = %w( zh aw oo ow oi nk ng wh th sh ch str a e i o u ! % & £ $ )

# Generate takes an input and generates a password of that numetrical value

		def generate(length)
			result = ''

			while result.length < length
				phra = PHRASES[rand(PHRASES.length)]
				result += phra
			end

			# Enures the password will always be the specified length
			result = result[0,length]
			return result

		end



# Ask the user how many character the password should be.

	def ask	

		puts 'How many characters?'
		size = gets.chomp.to_i
		n = Password.new
		puts n.generate(size)
	end

end 

p = Password.new.ask




#	sec = Password.new
#
#	puts " "
#	puts "Your Password is: " + sec.generate(8)
#	puts " "