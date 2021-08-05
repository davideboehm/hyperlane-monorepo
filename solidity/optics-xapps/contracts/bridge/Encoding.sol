// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;

library Encoding {
    bytes private constant NIBBLE_LOOKUP = "0123456789abcdef";

    function encodeUint32(uint32 _num)
        internal
        pure
        returns (uint80 _encoded)
    {
        uint80 ASCII_0 = 0x30;
        // all over/underflows are impossible
        // this will ALWAYS produce 10 decimal characters
        for (uint8 i = 0; i < 10; i += 1) {
            _encoded |= ((_num % 10) + ASCII_0) << (i * 8);
            _num = _num / 10;
        }
    }

    /**
     * @notice      Encodes the uint256 to hex. `first` contains the encoded top 16 bytes.
     *              `second` contains the encoded lower 16 bytes.
     *
     * @param _b    The 32 bytes as uint256
     * @return      _firstHalf - The top 16 bytes
     * @return      _secondHalf - The bottom 16 bytes
     */
    function encodeHex(uint256 _b)
        internal
        pure
        returns (uint256 _firstHalf, uint256 _secondHalf)
    {
        for (uint8 i = 31; i > 15; i -= 1) {
            uint8 _byte = uint8(_b >> (i * 8));
            _firstHalf |= _byteHex(_byte);
            if (i != 16) {
                _firstHalf <<= 16;
            }
        }

        // abusing underflow here =_=
        for (uint8 i = 15; i < 255; i -= 1) {
            uint8 _byte = uint8(_b >> (i * 8));
            _secondHalf |= _byteHex(_byte);
            if (i != 0) {
                _secondHalf <<= 16;
            }
        }
    }

    /**
     * @notice      Returns the encoded hex character that represents the lower 4 bits of the argument.
     * @param _b    The byte
     * @return      _char - The encoded hex character
     */
    function _nibbleHex(uint8 _b) private pure returns (uint8 _char) {
        uint8 _nibble = _b & 0x0f; // set bottom 4, keep top 4
        _char = uint8(NIBBLE_LOOKUP[_nibble]);
    }

    /**
     * @notice      Returns a uint16 containing the hex-encoded byte.
     * @param _b    The byte
     * @return      _encoded - The hex-encoded byte
     */
    function _byteHex(uint8 _b) private pure returns (uint16 _encoded) {
        _encoded |= _nibbleHex(_b >> 4); // top 4 bits
        _encoded <<= 8;
        _encoded |= _nibbleHex(_b); // lower 4 bits
    }
}