(function() {var type_impls = {
"sui_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Receiver%3CT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Receiver&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sui_core::consensus_adapter::BlockStatusReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-Receiver%3CT%3E\" class=\"impl\"><a href=\"#impl-Drop-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for Receiver&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","sui_core::consensus_adapter::BlockStatusReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Future-for-Receiver%3CT%3E\" class=\"impl\"><a href=\"#impl-Future-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for Receiver&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, RecvError&gt;</h4></section></summary><div class='docblock'>The type of value produced on completion.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll\" class=\"method trait-impl\"><a href=\"#method.poll\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html#tymethod.poll\" class=\"fn\">poll</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut Receiver&lt;T&gt;&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;&lt;Receiver&lt;T&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html#associatedtype.Output\" title=\"type core::future::future::Future::Output\">Output</a>&gt;</h4></section></summary><div class='docblock'>Attempt to resolve the future to a final value, registering\nthe current task for wakeup if the value is not yet available. <a href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html#tymethod.poll\">Read more</a></div></details></div></details>","Future","sui_core::consensus_adapter::BlockStatusReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Receiver%3CT%3E\" class=\"impl\"><a href=\"#impl-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Receiver&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.close\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">close</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Prevents the associated <a href=\"Sender\"><code>Sender</code></a> handle from sending a value.</p>\n<p>Any <code>send</code> operation which happens after calling <code>close</code> is guaranteed\nto fail. After calling <code>close</code>, <a href=\"Receiver::try_recv\"><code>try_recv</code></a> should be called to\nreceive a value if one was sent <strong>before</strong> the call to <code>close</code>\ncompleted.</p>\n<p>This function is useful to perform a graceful shutdown and ensure that a\nvalue will not be sent into the channel and never received.</p>\n<p><code>close</code> is no-op if a message is already received or the channel\nis already closed.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<p>Prevent a value from being sent</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::oneshot;\n<span class=\"kw\">use </span>tokio::sync::oneshot::error::TryRecvError;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, <span class=\"kw-2\">mut </span>rx) = oneshot::channel();\n\n    <span class=\"macro\">assert!</span>(!tx.is_closed());\n\n    rx.close();\n\n    <span class=\"macro\">assert!</span>(tx.is_closed());\n    <span class=\"macro\">assert!</span>(tx.send(<span class=\"string\">\"never received\"</span>).is_err());\n\n    <span class=\"kw\">match </span>rx.try_recv() {\n        <span class=\"prelude-val\">Err</span>(TryRecvError::Closed) =&gt; {}\n        <span class=\"kw\">_ </span>=&gt; <span class=\"macro\">unreachable!</span>(),\n    }\n}</code></pre></div>\n<p>Receive a value sent <strong>before</strong> calling <code>close</code></p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::oneshot;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, <span class=\"kw-2\">mut </span>rx) = oneshot::channel();\n\n    <span class=\"macro\">assert!</span>(tx.send(<span class=\"string\">\"will receive\"</span>).is_ok());\n\n    rx.close();\n\n    <span class=\"kw\">let </span>msg = rx.try_recv().unwrap();\n    <span class=\"macro\">assert_eq!</span>(msg, <span class=\"string\">\"will receive\"</span>);\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_recv\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">try_recv</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, TryRecvError&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to receive a value.</p>\n<p>If a pending value exists in the channel, it is returned. If no value\nhas been sent, the current task <strong>will not</strong> be registered for\nfuture notification.</p>\n<p>This function is useful to call from outside the context of an\nasynchronous task.</p>\n<p>Note that unlike the <code>poll</code> method, the <code>try_recv</code> method cannot fail\nspuriously. Any send or close event that happens before this call to\n<code>try_recv</code> will be correctly returned to the caller.</p>\n<h5 id=\"return\"><a class=\"doc-anchor\" href=\"#return\">§</a>Return</h5>\n<ul>\n<li><code>Ok(T)</code> if a value is pending in the channel.</li>\n<li><code>Err(TryRecvError::Empty)</code> if no value has been sent yet.</li>\n<li><code>Err(TryRecvError::Closed)</code> if the sender has dropped without sending\na value, or if the message has already been received.</li>\n</ul>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<p><code>try_recv</code> before a value is sent, then after.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::oneshot;\n<span class=\"kw\">use </span>tokio::sync::oneshot::error::TryRecvError;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, <span class=\"kw-2\">mut </span>rx) = oneshot::channel();\n\n    <span class=\"kw\">match </span>rx.try_recv() {\n        <span class=\"comment\">// The channel is currently empty\n        </span><span class=\"prelude-val\">Err</span>(TryRecvError::Empty) =&gt; {}\n        <span class=\"kw\">_ </span>=&gt; <span class=\"macro\">unreachable!</span>(),\n    }\n\n    <span class=\"comment\">// Send a value\n    </span>tx.send(<span class=\"string\">\"hello\"</span>).unwrap();\n\n    <span class=\"kw\">match </span>rx.try_recv() {\n        <span class=\"prelude-val\">Ok</span>(value) =&gt; <span class=\"macro\">assert_eq!</span>(value, <span class=\"string\">\"hello\"</span>),\n        <span class=\"kw\">_ </span>=&gt; <span class=\"macro\">unreachable!</span>(),\n    }\n}</code></pre></div>\n<p><code>try_recv</code> when the sender dropped before sending a value</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::oneshot;\n<span class=\"kw\">use </span>tokio::sync::oneshot::error::TryRecvError;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, <span class=\"kw-2\">mut </span>rx) = oneshot::channel::&lt;()&gt;();\n\n    drop(tx);\n\n    <span class=\"kw\">match </span>rx.try_recv() {\n        <span class=\"comment\">// The channel will never receive a value.\n        </span><span class=\"prelude-val\">Err</span>(TryRecvError::Closed) =&gt; {}\n        <span class=\"kw\">_ </span>=&gt; <span class=\"macro\">unreachable!</span>(),\n    }\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.blocking_recv\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">blocking_recv</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, RecvError&gt;</h4></section></summary><div class=\"docblock\"><p>Blocking receive to call outside of asynchronous contexts.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>This function panics if called within an asynchronous execution\ncontext.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::thread;\n<span class=\"kw\">use </span>tokio::sync::oneshot;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, rx) = oneshot::channel::&lt;u8&gt;();\n\n    <span class=\"kw\">let </span>sync_code = thread::spawn(<span class=\"kw\">move </span>|| {\n        <span class=\"macro\">assert_eq!</span>(<span class=\"prelude-val\">Ok</span>(<span class=\"number\">10</span>), rx.blocking_recv());\n    });\n\n    <span class=\"kw\">let _ </span>= tx.send(<span class=\"number\">10</span>);\n    sync_code.join().unwrap();\n}</code></pre></div>\n</div></details></div></details>",0,"sui_core::consensus_adapter::BlockStatusReceiver"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()