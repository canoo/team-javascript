var javascriptApiData = [
    {
        name: "Object",
        link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object",
        api: [
            {
                name: 'Object.create',
                link: 'https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create',
                parms: '(proto [, propertiesObject ])',
                desc: 'Creates new object with specified prototype &amp; properties'
            },
            {
                name: 'Object.defineProperty',
                link: 'https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/defineProperty',
                parms: '(obj, prop, descriptor)',
                desc: 'Define/modify property on object'
            },
            {
                name: 'Object.defineProperties',
                link: 'https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/defineProperties',
                parms: '(obj, props)',
                desc: 'Define/modify properties on object'
            },
            {
                name: 'Object.getOwnPropertyDescriptor',
                link: 'https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor',
                parms: '(obj, prop)',
                desc: "Get descriptor of object's own property (not prototype)"
            },
            {
                name: 'Object.keys',
                link: 'https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys',
                parms: '(obj)',
                desc: "Get array of object's own enumerable properties (not from prototype)"
            },
            {
                name: 'Object.getOwnPropertyNames',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames",
                parms: '(obj)',
                desc: "Get array of object's properties (not from prototype)" },
            {
                name: 'Object.getPrototypeOf',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf",
                parms: '(obj)',
                desc: "Gets object's prototype" },
            {
                name: 'Object.preventExtensions',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/preventExtensions",
                parms: '(obj)',
                desc: "Prevents new properties from being added to object" },
            {
                name: 'Object.isExtensible',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/isExtensible",
                parms: '(obj)',
                desc: "Determines if an object is extensible" },
            {
                name: 'Object.seal',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/seal",
                parms: '(obj)',
                desc: "Prevents new properties from being added to object, marks existing properties as non-configurable" },
            {
                name: 'Object.isSealed',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/isSealed",
                parms: '(obj)',
                desc: "Determine if an object is sealed" },
            {
                name: 'Object.freeze',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/freeze",
                parms: '(obj)',
                desc: "Makes object effectively immutable (no changes or configuration)" },
            {
                name: 'Object.isFrozen',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/isFrozen",
                parms: '(obj)',
                desc: "Determine if an object is frozen" },
            {
                name: 'hasOwnProperty',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty",
                parms: '(prop)',
                desc: "Whether object has specified property" },
            {
                name: 'isPrototypeOf',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/isPrototypeOf",
                parms: '(obj)',
                desc: "Whether this object is in prototype change of obj" },
            {
                name: 'toLocaleString',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/toLocaleString",
                parms: '()',
                desc: "Returns locale specific string form" },
            {
                name: 'toString',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/toString",
                parms: '()',
                desc: "Returns string form" },
            {
                name: 'valueOf',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/valueOf",
                parms: '()',
                desc: "Gets this object's primitive value" }
        ]
    },
    {
        name: "String",
        link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String",
        api: [
            {
                name: 'charAt',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/charAt",
                parms: '(index)',
                desc: "Gets specified character from string" },
            {
                name: 'charCodeAt',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/charCodeAt",
                parms: '(index)',
                desc: "Gets specified numeric Unicode value from string (when codepoint < 0x10000" },
            {
                name: 'concat',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/concat",
                parms: 'string2, string3[, ..., stringN]',
                desc: "Combines text of two or more strings" },
            {
                name: 'fromCharCode',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/fromCharCode",
                parms: '(num1, ..., numN)',
                desc: "Creates string from specified Unicode values" },
            {
                name: 'indexOf',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/indexOf",
                parms: '(searchValue[, fromIndex])',
                desc: "Returns index of searchValue's first occurrence, or -1 if not found" },
            {
                name: 'lastIndexOf',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/lastIndexOf",
                parms: '(searchValue[, fromIndex])',
                desc: "Returns index of searchValue's last occurrence, or -1 if not found" },
            {
                name: 'length',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/length",
                parms: '',
                desc: "Number of code units in the string" },
            {
                name: 'localeCompare',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/localeCompare",
                parms: '(compareString [, locales [, options]])',
                desc: "compareTo style result for a locale" },
            {
                name: 'match',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/match",
                parms: '(regexp)',
                desc: "Gets matches of string against a regular expression" },
            {
                name: 'replace',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/replace",
                parms: '(regexp|substr, newSubStr|function)',
                desc: "Creates new string with some/all matches of pattern replaced by a replacement" },
            {
                name: 'search',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/search",
                parms: '(regexp)',
                desc: "Matches against regular expression. Returns match index or -1" },
            {
                name: 'slice',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/slice",
                parms: '(beginslice[, endSlice])',
                desc: "Extracts a section of the string" },
            {
                name: 'split',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/split",
                parms: '([separator][, limit])',
                desc: "Splits the string into an array of substrings" },
            {
                name: 'substr',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/substr",
                parms: '(start[, length])',
                desc: "Gets length characters from string, beginning at start index" },
            {
                name: 'substring',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/substring",
                parms: '(indexA[, indexB])',
                desc: "Gets subset of string between indexA and indexB (or end)" },
            {
                name: 'toLocaleLowerCase',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase",
                parms: '()',
                desc: "String in lower-case, with any locale-specific conversions" },
            {
                name: 'toLocaleUpperCase',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase",
                parms: '()',
                desc: "String in upper-case, with any locale-specific conversions" },
            {
                name: 'toLowerCase',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/toLowerCase",
                parms: '()',
                desc: "String in lower-case" },
            {
                name: 'toUpperCase',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/toUpperCase",
                parms: '()',
                desc: "String in upper-case" },
            {
                name: 'trim',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/trim",
                parms: '()',
                desc: "Gets string with whitespace at both ends removed" }
        ]
    },
    {
        name: "Date",
        link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date",
        api: [
            {
                name: 'Date.now',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/now",
                parms: '()',
                desc: "Number of milliseconds elapsed since 1 January 1970"},
            {
                name: 'Date.UTC',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/UTC",
                parms: '(year, month[, date[, hrs[, min[, sec[, ms]]]]])',
                desc: "Number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time"},
            {
                name: 'Date.parse',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/parse",
                parms: '(dateString)',
                desc: "Parses a string representation of a date"},
            {
                name: 'getDate()/setDate',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setDate",
                parms: '(dayValue)',
                desc: "Get/Set day of month (1 to 31)"},
            {
                name: 'getDay',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getDay",
                parms: '()',
                desc: "Returns the day of the week in local time"},
            {
                name: 'getFullYear()/setFullYear',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setFullYear",
                parms: '(yearValue[, monthValue[, dayValue]])',
                desc: "Get/Set full year in local time (monthValue is 0 and 11)"},
            {
                name: 'getHours()/setHours',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setHours",
                parms: '(hoursValue[, minutesValue[, secondsValue[, msValue]]])',
                desc: "Get/Set hours in local time"},
            {
                name: 'getMilliseconds()/setMilliseconds',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setMilliseconds",
                parms: '(millisecondsValue)',
                desc: "Get/Set the milliseconds in local time"},
            {
                name: 'getMinutes()/setMinutes',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setMinutes",
                parms: '(minutesValue[, secondsValue[, msValue]]) ',
                desc: "Get/Set the minutes in local time"},
            {
                name: 'getMonth()/setMonth',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setMonth",
                parms: '(monthValue[, dayValue]) ',
                desc: "Get/Set month in local time (monthValue is 0 to 11)"},
            {
                name: 'getSeconds()/setSeconds',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setSeconds",
                parms: '(secondsValue[, msValue])',
                desc: "Get/Set seconds in local time"},
            {
                name: 'getTime()/setTime',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setTime",
                parms: '(timeValue)',
                desc: "Sets Date object to the time represented by a milliseconds since January 1, 1970"},
            {
                name: 'getTimezoneOffset',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset",
                parms: '()',
                desc: "Time-zone offset from UTC, in minutes, for the current locale"},
            {
                name: 'getUTCDate()/setUTCDate',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCDate",
                parms: '(dayValue)',
                desc: "Get/Set day of month in universal time"},
            {
                name: 'getUTCDay',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getUTCDay",
                parms: 'Day of week in universal time.',
                desc: "()"},
            {
                name: 'getUTCFullYear()/setUTCFullYear',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCFullYear",
                parms: '(yearValue[, monthValue[, dayValue]])',
                desc: "Get/Set full year in universal time (monthValue is 0 to 11)"},
            {
                name: 'getUTCHours()/setUTCHours',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCHours",
                parms: '(hoursValue[, minutesValue[, secondsValue[, msValue]]]) ',
                desc: "Get/Set the hour in universal time"},
            {
                name: 'getUTCMilliseconds()/setUTCMilliseconds',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds",
                parms: '(millisecondsValue)',
                desc: "Get/Set the milliseconds in universal time"},
            {
                name: 'getUTCMinutes()/setUTCMinutes',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCMinutes",
                parms: '(minutesValue[, secondsValue[, msValue]])',
                desc: "Gets/Sets the minutes in universal time"},
            {
                name: 'getUTCMonth()/setUTCMonth',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCMonth",
                parms: '(monthValue[, dayValue]) ',
                desc: "Get/Set the month in universal time (monthValue is 0 to 11)"},
            {
                name: 'getUTCSeconds()/setUTCSeconds',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/setUTCSeconds",
                parms: '(secondsValue[, msValue]) ',
                desc: "Get/Set the seconds in universal time"},
            {
                name: 'toDateString',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toDateString",
                parms: '()',
                desc: "Date portion in string format for US English"},
            {
                name: 'toISOString',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toISOString",
                parms: '()',
                desc: "Date/time string in format YYYY-MM-DDTHH:mm:ss.sssZ"},
            {
                name: 'toJSON',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toJSON",
                parms: '()',
                desc: "Returns a JSON representation of the object"},
            {
                name: 'toLocaleDateString',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toLocaleDateString",
                parms: '([locales [, options]])',
                desc: "Date portion in a language sensitive string format"},
            {
                name: 'toLocaleString',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toLocaleString",
                parms: '([locales [, options]])',
                desc: "Date/time string in a language sensitive format"},
            {
                name: 'toLocaleTimeString',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString",
                parms: '([locales [, options]])',
                desc: "Time portion in a language sensitive string format"},
            {
                name: 'toTimeString',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toTimeString",
                parms: '()',
                desc: "Time portion in string format for US English"},
            {
                name: 'toUTCString',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toUTCString",
                parms: '()',
                desc: "Convert to string, using the universal time convention"}
        ]
    },
    {
        name: "Number",
        link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number",
        api: [
            {
                name: 'Number.MIN_VALUE',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/MIN_VALUE",
                parms: '',
                desc: 'The smallest positive numeric value representable in JavaScript' },
            {
                name: 'Number.MAX_VALUE',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/MAX_VALUE",
                parms: '',
                desc: 'Maximum numeric value representable in JavaScript' },
            {
                name: 'Number.NEGATIVE_INFINITY',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY",
                parms: '',
                desc: 'The negative Infinity value' },
            {
                name: 'Number.POSITIVE_INFINITY',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY",
                parms: '',
                desc: 'The positive Infinity value' },
            {
                name: 'toExponential',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/toExponential",
                parms: '([fractionDigits])',
                desc: 'Returns a string representing the Number object in exponential notation' },
            {
                name: 'toFixed',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/toFixed",
                parms: '([digits])',
                desc: 'Formats a number using fixed-point notation' },
            {
                name: 'ToLocaleString',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/ToLocaleString",
                parms: '([locales [, options]])',
                desc: 'Returns a string with a language sensitive representation of this number' },
            {
                name: 'toPrecision',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/toPrecision",
                parms: '([precision])',
                desc: 'Returns string of number to specified precision' }
        ]
    },
    {
        name: "Array",
        link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array",
        api: [
            {
                name: 'Array.isArray',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/isArray",
                parms: '(obj)',
                desc: "true if obj is an array, false if not"
            },
            {
                name: 'concat',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/concat",
                parms: '(value1, value2, ..., valueN)',
                desc: "Joins multiple arrays together"
            },
            {
                name: 'every',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/every",
                parms: '(callback[, thisObject])',
                desc: "Tests if callback returns true for all elements, passing (element, index, array)"
            },
            {
                name: 'filter',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/filter",
                parms: '(callback[, thisObject])',
                desc: "Returns new array of all elements where callback returns true, passing (element, index, array)"
            },
            {
                name: 'forEach',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach",
                parms: '(callback[, thisArg])',
                desc: "Executes callback once per element, passing (element, index, array)"
            },
            {
                name: 'indexOf',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf",
                parms: '(searchElement[, fromIndex])',
                desc: "Returns index of first searchElement in array, or -1"
            },
            {
                name: 'join',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/join",
                parms: '(separator)',
                desc: "Joins array elements into a string"
            },
            {
                name: 'lastIndexOf',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
                parms: '(searchElement[, fromIndex])',
                desc: "Returns index of last searchElement in array, or -1"
            },
            {
                name: 'map',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/map",
                parms: '(callback[, thisArg])',
                desc: "Creates new array from result of calling callback on every element, passing (element, index, array)"
            },
            {
                name: 'pop',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/pop",
                parms: '()',
                desc: "Removes and returns last element"
            },
            {
                name: 'push',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/push",
                parms: '(element1, ..., elementN)',
                desc: "Appends given elements to end of array"
            },
            {
                name: 'reduce',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/Reduce",
                parms: '(callback[, initialValue])',
                desc: "Apply callback against an accumulator and each element (left-to-right), passing (previousValue, currentValue, index, array)"
            },
            {
                name: 'reduceRight',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/ReduceRight",
                parms: '(callback[, initialValue])',
                desc: "Same as reduce, but iterates list from right-to-left"
            },
            {
                name: 'reverse',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/reverse",
                parms: '()',
                desc: "Reverses array in place"
            },
            {
                name: 'shift',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/shift",
                parms: '()',
                desc: "Removes and returns first element"
            },
            {
                name: 'slice',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/slice",
                parms: '(begin[, end])',
                desc: "Creates a shallow copy of an array portion"
            },
            {
                name: 'some',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/some",
                parms: '(callback[, thisObject])',
                desc: "Tests if callback returns true for any element, passing (element, index, array)"
            },
            {
                name: 'sort',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/sort",
                parms: '([compareFunction])',
                desc: "Sorts array elements in place and returns array"
            },
            {
                name: 'splice',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/splice",
                parms: '(index , howMany[, element1[, ...[, elementN]]])',
                desc: "Changes array, adding new elements and and removing old elements"
            },
            {
                name: 'unshift',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/unshift",
                parms: '(element1, ..., elementN)',
                desc: "Add elements to the front of the array"
            }

        ]
    },
    {
        name: "Function",
        link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function",
        api: [
            {
                name: 'apply',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/apply",
                parms: '(thisArg[, argsArray])',
                desc: "Calls function with this bound to thisArg and arguments given as array"
            },
            {
                name: 'bind',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind",
                parms: '(thisArg[, arg1[, arg2[, ...]]])',
                desc: "Creates a callable function with this bound to thisArg and arguments bound to arg1/arg2/..."
            },
            {
                name: 'call',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/call",
                parms: '(thisArg[, arg1[, arg2[, ...]]])',
                desc: "Calls function with this bound to thisArg and arguments given individually"
            },
            {
                name: 'length',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/length",
                parms: '',
                desc: "number of arguments expected by function"
            }
        ]
    },
    {
        name: "RegExp",
        link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp",
        api: [
            {
                name: 'exec',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/exec",
                parms: '(str)',
                desc: "Searches for a match in str. Returns result array or null."
            },
            {
                name: 'lastIndex',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/lastIndex",
                parms: '',
                desc: "The index at which to start the next match"
            }
        ]
    },
    {
        name: "URI Functions",
        link: "",
        api: [
            {
                name: 'decodeURI',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/decodeURI",
                parms: '(encodedURI)',
                desc: "Decodes a Uniform Resource Identifier (URI)"
            },
            {
                name: 'decodeURIComponent',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/decodeURIComponent",
                parms: '(encodedURI)',
                desc: "Decodes a Uniform Resource Identifier (URI) component"
            },
            {
                name: 'encodeURI',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURI",
                parms: '(URI)',
                desc: "Encodes URI by replacing certain characters by escape sequences"
            },
            {
                name: 'encodeURIComponent',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent",
                parms: '(str)',
                desc: "Encodes URI component by replacing certain characters by escape sequences"
            }
        ]
    },
    {
        name: "Error Types",
        link: "",
        api: [
            {
                name: 'name',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Error/name",
                parms: '',
                desc: "The error name"
            },
            {
                name: 'message',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Error/message",
                parms: '',
                desc: "The error message"
            },
            {
                name: 'new Error',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Error",
                parms: '([message[, fileName[, lineNumber]]])',
                desc: "Creates an error object"
            },
            {
                name: 'new TypeError',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/TypeError",
                parms: '([message[, fileName[, lineNumber]]])',
                desc: "Creates an error for when a value is an unexpected type"
            },
            {
                name: 'new RangeError',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RangeError",
                parms: '([message])',
                desc: "Creates an error for when a number is outside of the correct range"
            }
        ]
    },
    {
        name: "Internationalization",
        link: "",
        api: [
            {
                name: 'Intl.Collator',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Collator",
                parms: '([locales [, options]])',
                desc: "Creates an object for language sensitive string comparison"
            },
            {
                name: 'Intl.DateTimeFormat',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/DateTimeFormat",
                parms: '([locales [, options]])',
                desc: "Creates an object for language sensitive date/time formatting"
            },
            {
                name: 'NumberFormat',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/NumberFormat",
                parms: '([locales [, options]])',
                desc: "Creates an object for language sensitive number formatting"
            }
        ]
    },
    {
        name: "Numeric Functions",
        link: "",
        api: [
            {
                name: 'isFinite',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/isFinite",
                parms: '(number) ',
                desc: "Whether the number is finite"
            },
            {
                name: 'isNaN',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/isNaN",
                parms: '(testValue)',
                desc: "Determines whether a value is NaN or not. Be careful with empty strings and booleans"
            },
            {
                name: 'Math.abs',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/abs",
                parms: '(x)',
                desc: "Returns the absolute value of a number"
            },
            {
                name: 'Math.acos',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/acos",
                parms: '(x)',
                desc: "Returns the arccosine (in radians) of a number"
            },
            {
                name: 'Math.asin',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/asin",
                parms: '(x)',
                desc: "Returns the arcsine (in radians) of a number"
            },
            {
                name: 'Math.atan',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/atan",
                parms: '(x)',
                desc: "Returns the arctangent (in radians) of a number"
            },
            {
                name: 'Math.atan',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/atan2",
                parms: '(y, x)',
                desc: "Returns the arctangent of the quotient of its arguments"
            },
            {
                name: 'Math.ceil',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/ceil",
                parms: '(x)',
                desc: "Returns the smallest integer greater than or equal to a number"
            },
            {
                name: 'Math.cos',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/cos",
                parms: '(x)',
                desc: "Returns the cosine of a number"
            },
            {
                name: 'Math.exp',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/exp",
                parms: '(x)',
                desc: "Returns E<sup>x</sup>, where x is the argument, and E is Euler's constant, the base of the natural logarithms"
            },
            {
                name: 'Math.floor',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/floor",
                parms: '(x)',
                desc: "Returns the largest integer less than or equal to a number"
            },
            {
                name: 'Math.log',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/log",
                parms: '(x)',
                desc: "Returns the natural logarithm (base E) of a number"
            },
            {
                name: 'Math.max',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/max",
                parms: '([value1[,value2[, ...]]])',
                desc: "Returns the largest of zero or more numbers"
            },
            {
                name: 'Math.min',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/min",
                parms: '([value1[,value2[, ...]]])',
                desc: "Returns the smallest of zero or more numbers"
            },
            {
                name: 'Math.pow',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/pow",
                parms: '(base, exponent)',
                desc: "Returns base to the exponent Power"
            },
            {
                name: 'Math.random',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random",
                parms: '()',
                desc: "Returns a floating-point, pseudo-random number in the range [0, 1) "
            },
            {
                name: 'Math.round',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/round",
                parms: '(x)',
                desc: "Rounds number to nearest integer"
            },
            {
                name: 'Math.sin',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/sin",
                parms: '(x)',
                desc: "Returns sine of a number"
            },
            {
                name: 'Math.sqrt',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/sqrt",
                parms: '(x)',
                desc: "Returns square root of a number"
            },
            {
                name: 'Math.tan',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/tan",
                parms: '(x)',
                desc: "Returns tangent of a number"
            },
            {
                name: 'parseFloat',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/parseFloat",
                parms: '(string)',
                desc: "Returns float of string"
            },
            {
                name: 'parseInt',
                link: "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/parseInt",
                parms: '(string, radix)',
                desc: "Returns integer with specified radix or base"
            }
        ]
    }
];

