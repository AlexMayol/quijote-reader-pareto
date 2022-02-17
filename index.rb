
def readLocalFile(path)
    IO.binread(path)
end 

class Sanitizer
    def sanitizeText(txt)
        res = txt.downcase
        res = res.gsub(/\?|\!|\.|\’|\,|\“|\”|\%|\$|\%|\&|\/|\*|\´|\`|\'|\;|\:|\\n|\\r|\r\n/u, '')
        # res = txt.gsub(/—|-/, ' ')
        return res
    end
end

class DictionaryEntry

    def initialize(word)
        @word = word
        @count = 1
    end

    def increment()
        @count = @count+1
    end

    def state()
        return [@word, @count]
    end
end

# text = readLocalFile('Sherlock.txt')
text = '“Indeed, I should have thought a little more. Just a trifle more, I
fancy, Watson. And in practice again, I observe. You did not tell me
that you intended to go into harness.”'

sanitizer = Sanitizer.new

formatted = sanitizer.sanitizeText(text)

puts formatted

words = formatted.split(" ")

for word in words do

   puts word
 
 end

##
#sherlock = DictionaryEntry.new('sherlock')
#sherlock.increment
#puts sherlock.state