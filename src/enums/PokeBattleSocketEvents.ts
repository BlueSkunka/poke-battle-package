export const PokeBattleSocketEvents = {
    CONNECTION: 'connection',
    DISCONNECT: 'disconnect',
    TEST_EVENT: 'test_event',

    // Game Event
    // Create socket room
    GAME_CREATE_ROOM: 'game_create_room',
    // Socket room created
    GAME_ROOM_CREATED: 'game_room_created',
    // Player joining room,
    GAME_PLAYER_JOINING: 'game_player_joining',
    // Player joined the game
    GAME_PLAYER_JOINED: 'game_player_joined',
    // Game player ready to battle,
    GAME_PLAYER_READY: 'game_player_ready',
    // Game player unready to battle,
    GAME_PLAYER_UNREADY: 'game_player_unready',
    // Game start
    GAME_START: 'game_start',
    // Player disconnected:
    GAME_PLAYER_DISCONNECT: 'game_player_disconnect',
    // Player left the game:
    GAME_PLAYER_LEFT: 'game_player_left',
    // Player reconnect to the game
    GAME_PLAYER_RECONNECTED: 'game_player_reconnected',
    // Player abandon the game
    GAME_PLAYER_ABANDON: 'game_player_abandon',
    // Game ended
    GAME_ENDED: 'game_ended',
}