import { gitVersionToSemver, parseGitVersion } from '../src/git-parser';

describe( 'Git version parser', () => {

    describe( 'Parser', () => {

        it( 'parses sha-only string', () => {
            const parsed = parseGitVersion( 'g7fe3054' );
            expect( parsed.version ).not.toBeDefined();
            expect( parsed.advance ).not.toBeDefined();
            expect( parsed.hash ).toBe( 'g7fe3054' );
        } );

        it( 'parses full version with v prefix', () => {
            const parsed = parseGitVersion( 'v2.7.0-41-g7fe3054' );
            expect( parsed.version ).toBe( '2.7.0' );
            expect( parsed.advance ).toBe( 41 );
            expect( parsed.hash ).toBe( 'g7fe3054' );
        } );

        it( 'parses full version without v prefix', () => {
            const parsed = parseGitVersion( '2.7.0-41-g7fe3054' );
            expect( parsed.version ).toBe( '2.7.0' );
            expect( parsed.advance ).toBe( 41 );
            expect( parsed.hash ).toBe( 'g7fe3054' );
        } );

    } );

    describe( 'Assembler', () => {

        it( 'creates full version tag', () => {
            expect( gitVersionToSemver( {
                version: '1.0.0',
                advance: 0,
                hash: 'foo',
            } ) ).toBe( '1.0.0' );
        } );

        it( 'creates hashed version tag', () => {
            expect( gitVersionToSemver( {
                version: '1.0.0',
                advance: 1,
                hash: 'foo',
            } ) ).toBe( '1.0.0-0001-foo' );
        } );

        it( 'creates hashed version tag with unknown version', () => {
            expect( gitVersionToSemver( {
                version: undefined,
                advance: undefined,
                hash: 'foo',
            } ) ).toBe( '0.0.0-0000-foo' );
        } );

    } );

} );
