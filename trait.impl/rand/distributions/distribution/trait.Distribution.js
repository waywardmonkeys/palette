(function() {var implementors = {
"palette":[["impl&lt;C, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/alpha/struct.Alpha.html\" title=\"struct palette::alpha::Alpha\">Alpha</a>&lt;C, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;C&gt; + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,</div>"],["impl&lt;M, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/lms/struct.Lms.html\" title=\"struct palette::lms::Lms\">Lms</a>&lt;M, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,</div>"],["impl&lt;S, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,</div>"],["impl&lt;S, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,</div>"],["impl&lt;S, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Hsl.html\" title=\"struct palette::Hsl\">Hsl</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a> + <a class=\"trait\" href=\"palette/num/trait.One.html\" title=\"trait palette::num::One\">One</a> + <a class=\"trait\" href=\"palette/num/trait.Cbrt.html\" title=\"trait palette::num::Cbrt\">Cbrt</a> + <a class=\"trait\" href=\"palette/num/trait.Sqrt.html\" title=\"trait palette::num::Sqrt\">Sqrt</a> + <a class=\"trait\" href=\"palette/num/trait.Arithmetics.html\" title=\"trait palette::num::Arithmetics\">Arithmetics</a> + <a class=\"trait\" href=\"palette/num/trait.PartialCmp.html\" title=\"trait palette::num::PartialCmp\">PartialCmp</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    T::<a class=\"associatedtype\" href=\"palette/bool_mask/trait.HasBoolMask.html#associatedtype.Mask\" title=\"type palette::bool_mask::HasBoolMask::Mask\">Mask</a>: <a class=\"trait\" href=\"palette/bool_mask/trait.LazySelect.html\" title=\"trait palette::bool_mask::LazySelect\">LazySelect</a>&lt;T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt; + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt;&gt;,</div>"],["impl&lt;S, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/num/trait.Cbrt.html\" title=\"trait palette::num::Cbrt\">Cbrt</a> + <a class=\"trait\" href=\"palette/num/trait.Sqrt.html\" title=\"trait palette::num::Sqrt\">Sqrt</a>,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt; + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt;&gt;,</div>"],["impl&lt;S, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Hwb.html\" title=\"struct palette::Hwb\">Hwb</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt;&gt;,\n    <a class=\"struct\" href=\"palette/struct.Hwb.html\" title=\"struct palette::Hwb\">Hwb</a>&lt;S, T&gt;: <a class=\"trait\" href=\"palette/convert/trait.FromColorUnclamped.html\" title=\"trait palette::convert::FromColorUnclamped\">FromColorUnclamped</a>&lt;<a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt;&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/cam16/struct.Cam16UcsJab.html\" title=\"struct palette::cam16::Cam16UcsJab\">Cam16UcsJab</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,\n    T: <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a> + <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/cam16/struct.Cam16UcsJmh.html\" title=\"struct palette::cam16::Cam16UcsJmh\">Cam16UcsJmh</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/num/trait.Sqrt.html\" title=\"trait palette::num::Sqrt\">Sqrt</a> + <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a> + <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt; + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/hues/struct.Cam16Hue.html\" title=\"struct palette::hues::Cam16Hue\">Cam16Hue</a>&lt;T&gt;&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/hues/struct.Cam16Hue.html\" title=\"struct palette::hues::Cam16Hue\">Cam16Hue</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/angle/trait.RealAngle.html\" title=\"trait palette::angle::RealAngle\">RealAngle</a> + <a class=\"trait\" href=\"palette/angle/trait.FullRotation.html\" title=\"trait palette::angle::FullRotation\">FullRotation</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.LabHue.html\" title=\"struct palette::LabHue\">LabHue</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/angle/trait.RealAngle.html\" title=\"trait palette::angle::RealAngle\">RealAngle</a> + <a class=\"trait\" href=\"palette/angle/trait.FullRotation.html\" title=\"trait palette::angle::FullRotation\">FullRotation</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.LuvHue.html\" title=\"struct palette::LuvHue\">LuvHue</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/angle/trait.RealAngle.html\" title=\"trait palette::angle::RealAngle\">RealAngle</a> + <a class=\"trait\" href=\"palette/angle/trait.FullRotation.html\" title=\"trait palette::angle::FullRotation\">FullRotation</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Okhsl.html\" title=\"struct palette::Okhsl\">Okhsl</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a> + <a class=\"trait\" href=\"palette/num/trait.One.html\" title=\"trait palette::num::One\">One</a> + <a class=\"trait\" href=\"palette/num/trait.Cbrt.html\" title=\"trait palette::num::Cbrt\">Cbrt</a> + <a class=\"trait\" href=\"palette/num/trait.Sqrt.html\" title=\"trait palette::num::Sqrt\">Sqrt</a> + <a class=\"trait\" href=\"palette/num/trait.Arithmetics.html\" title=\"trait palette::num::Arithmetics\">Arithmetics</a> + <a class=\"trait\" href=\"palette/num/trait.PartialCmp.html\" title=\"trait palette::num::PartialCmp\">PartialCmp</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    T::<a class=\"associatedtype\" href=\"palette/bool_mask/trait.HasBoolMask.html#associatedtype.Mask\" title=\"type palette::bool_mask::HasBoolMask::Mask\">Mask</a>: <a class=\"trait\" href=\"palette/bool_mask/trait.LazySelect.html\" title=\"trait palette::bool_mask::LazySelect\">LazySelect</a>&lt;T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt; + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.OklabHue.html\" title=\"struct palette::OklabHue\">OklabHue</a>&lt;T&gt;&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Okhsv.html\" title=\"struct palette::Okhsv\">Okhsv</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/num/trait.Cbrt.html\" title=\"trait palette::num::Cbrt\">Cbrt</a> + <a class=\"trait\" href=\"palette/num/trait.Sqrt.html\" title=\"trait palette::num::Sqrt\">Sqrt</a>,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt; + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.OklabHue.html\" title=\"struct palette::OklabHue\">OklabHue</a>&lt;T&gt;&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Okhwb.html\" title=\"struct palette::Okhwb\">Okhwb</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Okhsv.html\" title=\"struct palette::Okhsv\">Okhsv</a>&lt;T&gt;&gt;,\n    <a class=\"struct\" href=\"palette/struct.Okhwb.html\" title=\"struct palette::Okhwb\">Okhwb</a>&lt;T&gt;: <a class=\"trait\" href=\"palette/convert/trait.FromColorUnclamped.html\" title=\"trait palette::convert::FromColorUnclamped\">FromColorUnclamped</a>&lt;<a class=\"struct\" href=\"palette/struct.Okhsv.html\" title=\"struct palette::Okhsv\">Okhsv</a>&lt;T&gt;&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"palette/num/trait.One.html\" title=\"trait palette::num::One\">One</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.OklabHue.html\" title=\"struct palette::OklabHue\">OklabHue</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/angle/trait.RealAngle.html\" title=\"trait palette::angle::RealAngle\">RealAngle</a> + <a class=\"trait\" href=\"palette/angle/trait.FullRotation.html\" title=\"trait palette::angle::FullRotation\">FullRotation</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Oklch.html\" title=\"struct palette::Oklch\">Oklch</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/num/trait.Sqrt.html\" title=\"trait palette::num::Sqrt\">Sqrt</a>,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt; + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.OklabHue.html\" title=\"struct palette::OklabHue\">OklabHue</a>&lt;T&gt;&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/angle/trait.RealAngle.html\" title=\"trait palette::angle::RealAngle\">RealAngle</a> + <a class=\"trait\" href=\"palette/angle/trait.FullRotation.html\" title=\"trait palette::angle::FullRotation\">FullRotation</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,</div>"],["impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Hsluv.html\" title=\"struct palette::Hsluv\">Hsluv</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a> + <a class=\"trait\" href=\"palette/num/trait.One.html\" title=\"trait palette::num::One\">One</a> + <a class=\"trait\" href=\"palette/num/trait.Cbrt.html\" title=\"trait palette::num::Cbrt\">Cbrt</a> + <a class=\"trait\" href=\"palette/num/trait.Sqrt.html\" title=\"trait palette::num::Sqrt\">Sqrt</a> + <a class=\"trait\" href=\"palette/num/trait.Arithmetics.html\" title=\"trait palette::num::Arithmetics\">Arithmetics</a> + <a class=\"trait\" href=\"palette/num/trait.PartialCmp.html\" title=\"trait palette::num::PartialCmp\">PartialCmp</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    T::<a class=\"associatedtype\" href=\"palette/bool_mask/trait.HasBoolMask.html#associatedtype.Mask\" title=\"type palette::bool_mask::HasBoolMask::Mask\">Mask</a>: <a class=\"trait\" href=\"palette/bool_mask/trait.LazySelect.html\" title=\"trait palette::bool_mask::LazySelect\">LazySelect</a>&lt;T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt; + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.LuvHue.html\" title=\"struct palette::LuvHue\">LuvHue</a>&lt;T&gt;&gt;,</div>"],["impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,\n    T: <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,</div>"],["impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Lch.html\" title=\"struct palette::Lch\">Lch</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/num/trait.Sqrt.html\" title=\"trait palette::num::Sqrt\">Sqrt</a> + <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a> + <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt; + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.LabHue.html\" title=\"struct palette::LabHue\">LabHue</a>&lt;T&gt;&gt;,</div>"],["impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Lchuv.html\" title=\"struct palette::Lchuv\">Lchuv</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/num/trait.Sqrt.html\" title=\"trait palette::num::Sqrt\">Sqrt</a> + <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a> + <a class=\"trait\" href=\"palette/num/trait.Zero.html\" title=\"trait palette::num::Zero\">Zero</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt; + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.LuvHue.html\" title=\"struct palette::LuvHue\">LuvHue</a>&lt;T&gt;&gt;,</div>"],["impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,\n    T: <a class=\"trait\" href=\"palette/num/trait.Real.html\" title=\"trait palette::num::Real\">Real</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,</div>"],["impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt;,\n    Wp: <a class=\"trait\" href=\"palette/white_point/trait.WhitePoint.html\" title=\"trait palette::white_point::WhitePoint\">WhitePoint</a>&lt;T&gt;,</div>"],["impl&lt;Wp, T&gt; <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;<a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://rust-random.github.io/rand/rand/distributions/struct.Standard.html\" title=\"struct rand::distributions::Standard\">Standard</a>: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;T&gt;,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()