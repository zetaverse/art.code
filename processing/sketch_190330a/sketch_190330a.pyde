def setup():
    size(800, 800)
    background(0)
    noLoop()
    frameRate(2)
    
def draw():
    for i in range(width, 0, -10):
        for j in range(height, 0, -10):
            fill(noise(i) * random(200), noise(j) * random(100), noise(50) * i)
            noStroke()
            smooth()
            rect(i, j, noise(i) * random(0,10), noise(j) * random(0, 150))
            
