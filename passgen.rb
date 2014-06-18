
PHRASES = %w( zh aw oo ow oi nk ng wh th sh ch str a e i o u ! % & £ $ )

	

	def generate

		pass = PHRASES[rand(PHRASES.length)]
		return pass
	end

puts generate