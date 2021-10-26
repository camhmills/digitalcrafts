
# imports
import pygame
import sys
import random

pygame.init()

def ballPhsyics():
    global ballSpeedX, ballSpeedY, playerScore, oppScore

    ball.x += ballSpeedX
    ball.y += ballSpeedY

    #ball physics
    if ball.right >= screen_width:
        oppScore += 1
    if ball.left <= 0:
        playerScore += 1
    if ball.top <= 0 or ball.bottom >= screen_height:
        ballSpeedY *= -1
    if ball.left <= 0 or ball.right >= screen_width:
        ballRestart()

    #ball/paddle collisions
    if ball.colliderect(player) or ball.colliderect(opponent):
        ballSpeedX *= -1
    
def ballRestart():
    global ballSpeedY, ballSpeedX
    if ball.left <= 0 or ball.right >= screen_width:
        ball.center = (screen_width/2, screen_height/2)
        ballSpeedY *= random.choice((1, -1))
        ballSpeedX *= random.choice ((1, -1))



#clock
clock = pygame.time.Clock()

#display surface
screen_width = 1280
screen_height = 960
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Pong")



#regular surfaces
ball = pygame.Rect(screen_width/2 - 15, screen_height/2 - 15, 30, 30)
player = pygame.Rect(screen_width - 20, screen_height/2-70, 10, 140)
opponent = pygame.Rect(10, screen_height/2 - 70, 10, 140 )




playerSpeed = 0
oppSpeed = 0

ballSpeedX = 7
ballSpeedY = 7

# scores


bg_color = pygame.Color("Black")
lightGrey = (200, 200, 200)

#game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exist
    # controls
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_DOWN:
            playerSpeed += 7
        if event.key == pygame.K_UP:
            playerSpeed -= 7
    playerScore = 0
    oppScore = 0        

    scoreFont = pygame.font.Font(None, 75)
    playerScoreText = scoreFont.render(str(playerScore), True, (255, 255, 255))
    oppScoreText = scoreFont.render(str(oppScore), True, (255, 255, 255))

    # player limits
    if player.top <= 0:
        player.top = 5
    if player.bottom >= screen_height:
        player.bottom = 955

    opponent.centery = ball.y

    # opponent limits
    if opponent.top <= 0:
        opponent.top = 5
    if opponent.bottom >= screen_height:
        opponent.bottom = 955

    screen.fill(bg_color)
    pygame.draw.ellipse(screen, (255, 255, 255), ball)
    pygame.draw.rect(screen, (255, 255, 255), player)
    pygame.draw.rect(screen, (255, 255, 255), opponent)
    pygame.draw.aaline(screen, (255, 255, 255), (screen_width/2, 0), (screen_width/2, screen_height))

    player.y = playerSpeed

    screen.blit(playerScoreText, (screen_width/2+15, 10))
    screen.blit(oppScoreText, (screen_width/2-43, 10))

    pygame.display.flip()
    clock.tick(60)
    

    
    ballPhsyics()
    ballRestart()