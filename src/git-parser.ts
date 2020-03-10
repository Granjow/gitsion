const pad = ( nr : number ) => {
    return nr.toString( 10 ).padStart( 4, '0' );
};

export interface VersionInfo {
    version : string | undefined;
    advance : number | undefined;
    hash : string;
}

export const parseGitVersion = ( raw : string ) : VersionInfo => {

    const input = raw.trim();
    const reFull = /^v?([^-]+)-(\d+)-([^-]+)$/;
    const reHash = /^[a-z0-9]+$/;

    let match;
    if ( ( match = reFull.exec( input ) ) ) {

        return {
            version: match[ 1 ],
            advance: Number( match[ 2 ] ),
            hash: match[ 3 ],
        };

    } else if ( ( match = reHash.exec( input ) ) ) {

        return {
            version: undefined,
            advance: undefined,
            hash: match[ 0 ],
        };

    } else {
        throw new Error( `Could not parse version: ${input}` );
    }
};

export const gitVersionToSemver = ( info : VersionInfo ) : string => {
    if ( info.advance === 0 ) {
        return info.version;
    }
    const version = info.version || '0.0.0';
    const advance = pad( info.advance === undefined ? 0 : info.advance );
    return `${version}-${advance}-${info.hash}`
};
