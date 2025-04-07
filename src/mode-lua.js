define("ace/mode/lua_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module){"use strict";
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var LuaHighlightRules = function () {
    var keywords =
		"if|else|elseif|export|for|while|break|continue|repeat|until|next|not|then|end|function|local|or|and|do|self|type|typeof|" +
        "true|false|nil"
    var builtinConstants =
		// lua globals

		"_G|_VERSION|" +
		// roblox globals

		"Enum|game|plugin|shared|script|workspace|" +
		"Axes|BrickColor|CFrame|CatalogSearchParams|Color3|ColorSequence|ColorSequenceKeypoint|Content|DateTime|DockWidgetPluginGuiInfo|Enum|EnumItem|Enums|Faces|FloatCurveKey|Font|Instance|NumberRange|NumberSequence|NumberSequenceKeypoint|OverlapParams|Path2DControlPoint|PathWaypoint|PhysicalProperties|RBXScriptConnection|RBXScriptSignal|Random|Ray|RaycastParams|RaycastResult|Rect|Region3|Region3int16|RotationCurveKey|Secret|SharedTable|TweenInfo|UDim|UDim2|Vector2|Vector2int16|Vector3|Vector3int16"

    var functions =
		// lua globals
		"assert|collectgarbage|error|gcinfo|getfenv|getmetatable|ipairs|loadstring|newproxy|next|pairs|pcall|print|rawequal|rawget|rawlen|rawset|require|select|setfenv|setmetatable|tonumber|tostring|type|unpack|xpcall|" +
		// roblox globals

		"delay|DebuggerManager|elapsedTime|PluginManager|printidentity|settings|spawn|stats|tick|time|typeof|UserSettings|version|wait|warn|ypcall|" +
		// library and instance things

		"AddAccessory|AddPersistentPlayer|AddTag|AddToFilter|AncestryChanged|Anchored|Angles|AngularAccelerationToTorque|ApplyAngularImpulse|ApplyDescription|ApplyDescriptionReset|ApplyImpulse|ApplyImpulseAtPosition|Archivable|ArePartsTouchingOthers|AssemblyAngularVelocity|AssemblyCenterOfMass|AssemblyLinearVelocity|AssemblyMass|AssemblyRootPart|AttributeChanged|AudioCanCollide|AutoJumpEnabled|AutoRotate|AutomaticScalingEnabled|B|BackSurface|BindToClose|Blockcast|BottomSurface|BreakJointsOnDeath|BrickColor|BruteForceAllSlow|BuildRigFromAttachments|BulkMoveTo|CFrame|CameraOffset|CanCollide|CanCollideWith|CanQuery|CanSetNetworkOwnership|CanTouch|CastShadow|CenterOfMass|ChangeState|ChildAdded|ChildRemoved|ClearAllChildren|Clone|Close|ClosestPoint|CollisionGroup|Color|CreatorId|CreatorType|CurrentPhysicalProperties|CustomPhysicalProperties|Density|DescendantAdded|DescendantRemoving|Destroy|Destroying|Direction|DisplayDistanceType|DisplayName|Distance|Elasticity|ElasticityWeight|EnableFluidForces|EquipTool|EvaluateStateMachine|ExtentsCFrame|ExtentsSize|FilterDescendantsInstances|FilterType|FindFirstAncestor|FindFirstAncestorOfClass|FindFirstAncestorWhichIsA|FindFirstChild|FindFirstChildOfClass|FindFirstChildWhichIsA|FindFirstDescendant|FindService|FloorMaterial|Friction|FrictionWeight|FromName|FromValue|FrontSurface|FuzzyEq|G|GameId|Genre|GetAccessories|GetActor|GetAppliedDescription|GetAttribute|GetAttributeChangedSignal|GetAttributes|GetBodyPartR15|GetBoundingBox|GetChildren|GetClosestPointOnSurface|GetComponents|GetConnectedParts|GetDebugId|GetDescendants|GetEnumItems|GetExtentsSize|GetFullName|GetJobsInfo|GetJoints|GetLimb|GetMass|GetMoveVelocity|GetNetworkOwner|GetNetworkOwnershipAuto|GetNoCollisionConstraints|GetNumAwakeParts|GetObjects|GetPartBoundsInBox|GetPartBoundsInRadius|GetPartsInPart|GetPersistentPlayers|GetPhysicsThrottling|GetPivot|GetRealPhysicsFPS|GetRootPart|GetScale|GetServerTimeNow|GetService|GetState|GetStateEnabled|GetStyled|GetStyledPropertyChangedSignal|GetTags|GetTouchingParts|GetVelocityAtPosition|GraphicsQualityChangeRequest|HasTag|Health|HealthDisplayDistance|HealthDisplayType|HipHeight|IKMoveTo|IntersectAsync|Inverse|IsAncestorOf|IsDescendantOf|IsGrounded|IsLoaded|IsPropertyModified|JobId|JoinToOutsiders|Jump|JumpHeight|JumpPower|Keypoints|LeftSurface|Lerp|Loaded|LocalTransparencyModifier|Locked|LookVector|Mass|Massless|MatchmakingType|Material|MaterialVariant|MaxHealth|MaxParts|MaxSlopeAngle|Move|MoveDirection|MoveTo|Name|NameDisplayDistance|NameOcclusion|NextInteger|NextNumber|NextUnitVector|Orientation|Origin|Orthonormalize|PGSIsEnabled|Parent|Pivot Offset|PivotOffset|PivotTo|PlaceId|PlaceVersion|PlatformStand|PlayEmote|PointToObjectSpace|PointToWorldSpace|Position|PrivateServerId|PrivateServerOwnerId|R|Raycast|ReceiveAge|Reflectance|Remove|RemoveAccessories|RemovePersistentPlayer|RemoveTag|ReplaceBodyPartR15|RequiresNeck|ResetPropertyToDefault|Resize|ResizeIncrement|ResizeableFaces|RespectCanCollide|RigType|RightSurface|RightVector|RootPart|RootPriority|Rotation|ScaleTo|SeatPart|ServiceAdded|ServiceRemoving|SetAttribute|SetNetworkOwner|SetNetworkOwnershipAuto|SetPlaceId|SetStateEnabled|SetUniverseId|Shapecast|Shuffle|Sit|Size|Spherecast|StepPhysics|StyledPropertiesChanged|SubtractAsync|TakeDamage|TargetPoint|ToAxisAngle|ToEulerAngles|ToEulerAnglesXYZ|ToEulerAnglesYXZ|ToHSV|ToHex|ToObjectSpace|ToOrientation|ToWorldSpace|TopSurface|TorqueToAngularAcceleration|TouchEnded|Touched|TranslateBy|Transparency|UnequipTools|UnionAsync|Unit|UnjoinFromOutsiders|UpVector|UseJumpPower|Value|VectorToObjectSpace|VectorToWorldSpace|WaitForChild|WalkSpeed|WalkToPart|WalkToPoint|Workspace|X|XVector|Y|YVector|Z|ZVector|ZoomToExtents|abs|acos|angle|arshift|asin|atan|atan2|band|bnot|bor|btest|bxor|byte|byteswap|cancel|ceil|char|charpattern|clamp|clear|clock|clone|close|codepoint|codes|components|concat|copy|cos|cosh|countlz|countrz|create|cross|date|defer|deg|delay|desynchronize|difftime|dot|dumpcodesize|exp|extract|fill|find|floor|fmod|foreach|foreachi|format|freeze|frexp|fromAxisAngle|fromEulerAngles|fromEulerAnglesXYZ|fromEulerAnglesYXZ|fromHSV|fromHex|fromMatrix|fromOrientation|fromRGB|fromRotationBetweenVectors|fromstring|getmemorycategory|getn|gmatch|graphemes|gsub|huge|identity|info|insert|isfrozen|isyieldable|ldexp|len|lerp|log|log10|lookAlong|lookAt|lower|lrotate|lshift|magnitude|map|match|max|maxn|min|modf|move|new|nfcnormalize|nfdnormalize|noise|normalize|offset|one|pack|packsize|pi|pow|profilebegin|profileend|rad|random|randomseed|readf32|readf64|readi16|readi32|readi8|readstring|readu16|readu32|readu8|remove|rep|replace|resetmemorycategory|resume|reverse|round|rrotate|rshift|running|setmemorycategory|sign|sin|sinh|sort|spawn|split|sqrt|status|sub|synchronize|tan|tanh|time|tostring|traceback|unpack|upper|wait|wrap|writef32|writef64|writei16|writei32|writei8|writestring|writeu16|writeu32|writeu8|yield|zero" +
		// metatables wow

		"|__index|__newindex|__call|__concat|__unm|__add|__sub|__mul|__div|__idiv|__mod|__pow|__tostring|__metatable|__eq|__lt|__le|__mode|__gc|__len|__iter|" +
    
        // custom functions

        "whitelist|LoadLibrary"

        var stdLibaries =
		"bit32|buffer|coroutine|debug|math|os|string|table|task|utf8|vector"
    var deprecatedIn5152 = ("");
    var keywordMapper = this.createKeywordMapper({
        "keyword": keywords,
        "support.function": functions,
        "keyword.deprecated": deprecatedIn5152,
        "constant.library": stdLibaries,
        "constant.language": builtinConstants,
        "variable.language": "self"
    }, "identifier");
    var decimalInteger = "(?:(?:[1-9]\\d*)|(?:0))";
    var hexInteger = "(?:0[xX][\\dA-Fa-f]+)";
    var integer = "(?:" + decimalInteger + "|" + hexInteger + ")";
    var fraction = "(?:\\.\\d+)";
    var intPart = "(?:\\d+)";
    var pointFloat = "(?:(?:" + intPart + "?" + fraction + ")|(?:" + intPart + "\\.))";
    var floatNumber = "(?:" + pointFloat + ")";
    this.$rules = {
        "start": [{
                stateName: "bracketedComment",
                onMatch: function (value, currentState, stack) {
                    stack.unshift(this.next, value.length - 2, currentState);
                    return "comment";
                },
                regex: /\-\-\[=*\[/,
                next: [
                    {
                        onMatch: function (value, currentState, stack) {
                            if (value.length == stack[1]) {
                                stack.shift();
                                stack.shift();
                                this.next = stack.shift();
                            }
                            else {
                                this.next = "";
                            }
                            return "comment";
                        },
                        regex: /\]=*\]/,
                        next: "start"
                    }, {
                        defaultToken: "comment.body"
                    }
                ]
            },
            {
                token: "comment",
                regex: "\\-\\-.*$"
            },
            {
                stateName: "bracketedString",
                onMatch: function (value, currentState, stack) {
                    stack.unshift(this.next, value.length, currentState);
                    return "string.start";
                },
                regex: /\[=*\[/,
                next: [
                    {
                        onMatch: function (value, currentState, stack) {
                            if (value.length == stack[1]) {
                                stack.shift();
                                stack.shift();
                                this.next = stack.shift();
                            }
                            else {
                                this.next = "";
                            }
                            return "string.end";
                        },
                        regex: /\]=*\]/,
                        next: "start"
                    }, {
                        defaultToken: "string"
                    }
                ]
            },
            {
                token: "string", // " string
                regex: '"(?:[^\\\\]|\\\\.)*?"'
            }, {
                token: "string", // ' string
                regex: "'(?:[^\\\\]|\\\\.)*?'"
            }, {
                token: "constant.numeric", // float
                regex: floatNumber
            }, {
                token: "constant.numeric", // integer
                regex: integer + "\\b"
            }, {
                token: keywordMapper,
                regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            }, {
                token: "keyword.operator",
                regex: "\\+|\\-|\\*|\\/|%|\\#|\\^|~|<|>|<=|=>|==|~=|=|\\:|\\.\\.\\.|\\.\\."
            }, {
                token: "paren.lparen",
                regex: "[\\[\\(\\{]"
            }, {
                token: "paren.rparen",
                regex: "[\\]\\)\\}]"
            }, {
                token: "text",
                regex: "\\s+|\\w+"
            }]
    };
    this.normalizeRules();
};
oop.inherits(LuaHighlightRules, TextHighlightRules);
exports.LuaHighlightRules = LuaHighlightRules;

});

define("ace/mode/folding/lua",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"], function(require, exports, module){"use strict";
var oop = require("../../lib/oop");
var BaseFoldMode = require("./fold_mode").FoldMode;
var Range = require("../../range").Range;
var TokenIterator = require("../../token_iterator").TokenIterator;
var FoldMode = exports.FoldMode = function () { };
oop.inherits(FoldMode, BaseFoldMode);
(function () {
    this.foldingStartMarker = /\b(function|then|do|repeat)\b|{\s*$|(\[=*\[)/;
    this.foldingStopMarker = /\bend\b|^\s*}|\]=*\]/;
    this.getFoldWidget = function (session, foldStyle, row) {
        var line = session.getLine(row);
        var isStart = this.foldingStartMarker.test(line);
        var isEnd = this.foldingStopMarker.test(line);
        if (isStart && !isEnd) {
            var match = line.match(this.foldingStartMarker);
            if (match[1] == "then" && /\belseif\b/.test(line))
                return;
            if (match[1]) {
                if (session.getTokenAt(row, match.index + 1).type === "keyword")
                    return "start";
            }
            else if (match[2]) {
                var type = session.bgTokenizer.getState(row) || "";
                if (type[0] == "bracketedComment" || type[0] == "bracketedString")
                    return "start";
            }
            else {
                return "start";
            }
        }
        if (foldStyle != "markbeginend" || !isEnd || isStart && isEnd)
            return "";
        var match = line.match(this.foldingStopMarker);
        if (match[0] === "end") {
            if (session.getTokenAt(row, match.index + 1).type === "keyword")
                return "end";
        }
        else if (match[0][0] === "]") {
            var type = session.bgTokenizer.getState(row - 1) || "";
            if (type[0] == "bracketedComment" || type[0] == "bracketedString")
                return "end";
        }
        else
            return "end";
    };
    this.getFoldWidgetRange = function (session, foldStyle, row) {
        var line = session.doc.getLine(row);
        var match = this.foldingStartMarker.exec(line);
        if (match) {
            if (match[1])
                return this.luaBlock(session, row, match.index + 1);
            if (match[2])
                return session.getCommentFoldRange(row, match.index + 1);
            return this.openingBracketBlock(session, "{", row, match.index);
        }
        var match = this.foldingStopMarker.exec(line);
        if (match) {
            if (match[0] === "end") {
                if (session.getTokenAt(row, match.index + 1).type === "keyword")
                    return this.luaBlock(session, row, match.index + 1);
            }
            if (match[0][0] === "]")
                return session.getCommentFoldRange(row, match.index + 1);
            return this.closingBracketBlock(session, "}", row, match.index + match[0].length);
        }
    };
    this.luaBlock = function (session, row, column, tokenRange) {
        var stream = new TokenIterator(session, row, column);
        var indentKeywords = {
            "function": 1,
            "do": 1,
            "then": 1,
            "elseif": -1,
            "end": -1,
            "repeat": 1,
            "until": -1
        };
        var token = stream.getCurrentToken();
        if (!token || token.type != "keyword")
            return;
        var val = token.value;
        var stack = [val];
        var dir = indentKeywords[val];
        if (!dir)
            return;
        var startColumn = dir === -1 ? stream.getCurrentTokenColumn() : session.getLine(row).length;
        var startRow = row;
        stream.step = dir === -1 ? stream.stepBackward : stream.stepForward;
        while (token = stream.step()) {
            if (token.type !== "keyword")
                continue;
            var level = dir * indentKeywords[token.value];
            if (level > 0) {
                stack.unshift(token.value);
            }
            else if (level <= 0) {
                stack.shift();
                if (!stack.length && token.value != "elseif")
                    break;
                if (level === 0)
                    stack.unshift(token.value);
            }
        }
        if (!token)
            return null;
        if (tokenRange)
            return stream.getCurrentTokenRange();
        var row = stream.getCurrentTokenRow();
        if (dir === -1)
            return new Range(row, session.getLine(row).length, startRow, startColumn);
        else
            return new Range(startRow, startColumn, row, stream.getCurrentTokenColumn());
    };
}).call(FoldMode.prototype);

});

define("ace/mode/lua",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/lua_highlight_rules","ace/mode/folding/lua","ace/range","ace/worker/worker_client"], function(require, exports, module){"use strict";
var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var LuaHighlightRules = require("./lua_highlight_rules").LuaHighlightRules;
var LuaFoldMode = require("./folding/lua").FoldMode;
var Range = require("../range").Range;
var WorkerClient = require("../worker/worker_client").WorkerClient;
var Mode = function () {
    this.HighlightRules = LuaHighlightRules;
    this.foldingRules = new LuaFoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);
(function () {
    this.lineCommentStart = "--";
    this.blockComment = { start: "--[[", end: "--]]" };
    var indentKeywords = {
        "function": 1,
        "then": 1,
        "do": 1,
        "else": 1,
        "elseif": 1,
        "repeat": 1,
        "end": -1,
        "until": -1
    };
    var outdentKeywords = [
        "else",
        "elseif",
        "end",
        "until"
    ];
    function getNetIndentLevel(tokens) {
        var level = 0;
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (token.type == "keyword") {
                if (token.value in indentKeywords) {
                    level += indentKeywords[token.value];
                }
            }
            else if (token.type == "paren.lparen") {
                level += token.value.length;
            }
            else if (token.type == "paren.rparen") {
                level -= token.value.length;
            }
        }
        if (level < 0) {
            return -1;
        }
        else if (level > 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    this.getNextLineIndent = function (state, line, tab) {
        var indent = this.$getIndent(line);
        var level = 0;
        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        if (state == "start") {
            level = getNetIndentLevel(tokens);
        }
        if (level > 0) {
            return indent + tab;
        }
        else if (level < 0 && indent.substr(indent.length - tab.length) == tab) {
            if (!this.checkOutdent(state, line, "\n")) {
                return indent.substr(0, indent.length - tab.length);
            }
        }
        return indent;
    };
    this.checkOutdent = function (state, line, input) {
        if (input != "\n" && input != "\r" && input != "\r\n")
            return false;
        if (line.match(/^\s*[\)\}\]]$/))
            return true;
        var tokens = this.getTokenizer().getLineTokens(line.trim(), state).tokens;
        if (!tokens || !tokens.length)
            return false;
        return (tokens[0].type == "keyword" && outdentKeywords.indexOf(tokens[0].value) != -1);
    };
    this.getMatching = function (session, row, column) {
        if (row == undefined) {
            var pos = session.selection.lead;
            column = pos.column;
            row = pos.row;
        }
        var startToken = session.getTokenAt(row, column);
        if (startToken && startToken.value in indentKeywords)
            return this.foldingRules.luaBlock(session, row, column, true);
    };
    this.autoOutdent = function (state, session, row) {
        var line = session.getLine(row);
        var column = line.match(/^\s*/)[0].length;
        if (!column || !row)
            return;
        var startRange = this.getMatching(session, row, column + 1);
        if (!startRange || startRange.start.row == row)
            return;
        var indent = this.$getIndent(session.getLine(startRange.start.row));
        if (indent.length != column) {
            session.replace(new Range(row, 0, row, column), indent);
            session.outdentRows(new Range(row + 1, 0, row + 1, 0));
        }
    };
    this.createWorker = function (session) {
        var worker = new WorkerClient(["ace"], "ace/mode/lua_worker", "Worker");
        worker.attachToDocument(session.getDocument());
        worker.on("annotate", function (e) {
            session.setAnnotations(e.data);
        });
        worker.on("terminate", function () {
            session.clearAnnotations();
        });
        return worker;
    };
    this.$id = "ace/mode/lua";
    this.snippetFileId = "ace/snippets/lua";
}).call(Mode.prototype);
exports.Mode = Mode;

});                (function() {
                    window.require(["ace/mode/lua"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            