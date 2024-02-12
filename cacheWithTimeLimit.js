// https://leetcode.com/problems/cache-with-time-limit/

// var 
var TimeLimitedCache = function () {
    // this._data = {};
    this.cache = {};
    this.activeKeysCount = 0;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    this.cache[key] ? clearTimeout(this.cache[key].timeOutId) : this.activeKeysCount++;

    this.cache[key] = {
        value,
        timeOut: setTimeout(() => {
            delete this.cache[key];
            this.activeKeysCount--;
        }, duration)
    }
    return !!item;
    // let isNotExpired;
    // const now = Date.now();
    // if (_data[key]) {
    //     const durationStored = _data[key] && _data[key][1];
    //     isNotExpired = durationStored !== undefined && durationStored >= now;
    //     _data[key] = [value, now + duration];
    // } else {
    //     _data[key] = [value, now + duration];
    //     isNotExpired = false;
    // }
    // return isNotExpired;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const item = this.cache[key];
    return item ? item.value : -1;
    // const now = Date.now();
    // return _data[key] && _data[key][1] >= now ? _data[key][0] : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.activeKeysCount;
    // const now = Date.now();
    // let count = 0;
    // Object.keys(_data).forEach(function (k) {
    //     const v = _data[k];
    //     if (v[1] >= now) {
    //         count++
    //     }
    // });
    // return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */


