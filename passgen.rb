#
# => Password generator
# => By Sam 'phantomofthesoup' Detnon
#

class Password

	PHRASES = %w( zh aw oo ow oi nk ng wh th sh ch str a e i o u ! % & £ $ )

		def generate(length)
			result = ''

			while result.length < length
				phra = PHRASES[rand(PHRASES.length)]
				result += phra
			end

			result = result[0,length]
			return result

		end
end 



	sec = Password.new

	puts sec.generate(8)
