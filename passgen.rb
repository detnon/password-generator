#
# => Password generator
# => By Sam 'phantomofthesoup' Detnon
#

class Password

	PHRASES = %w( zh aw oo ow oi nk ng wh th sh ch str a e i o u ! % & £ $ 1 2 3 4 5 6 7 8 9 0 )

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
		size = gets.chomp
		n = Password.new
		puts n.generate(size)
	end

end 

p = Password.new.ask

