export const PokeBattleGameState = {
    // Game is not started yet
    PENDING: 'pending',
    // game is started and being played
    PLAYING: 'playing',
    // Game is started and being paused
    AWAITING: 'awaiting',
    // Game is finished by surrender
    ABANDONED: 'abandoned',
    // Game is finished normally
    FINISHED: 'finished'
}