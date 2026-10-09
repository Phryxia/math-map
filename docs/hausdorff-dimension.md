# Hausdorff 차원

# 개요

Hausdorff 차원은 집합의 크기를 재는 척도의 지수다. 집합을 작은 덮개로 덮고 지름의 $s$ 제곱을 더한 하한이 $s$ 를 키우면 $\infty$ 에서 $0$ 으로 떨어지는데, 그 전환이 일어나는 $s$ 가 차원이다. 정수가 아닌 값을 가질 수 있어 Cantor 집합이나 Koch 곡선 같은 자기유사 집합의 크기를 가른다.

# 직관

Cantor 집합은 Lebesgue 측도가 $0$ 이고 셀 수 없이 많은 점을 가졌다. 측도는 두 성질을 가진 집합들을 모두 $0$ 으로 보내므로 그들끼리의 크기를 가르지 못한다. 길이가 아닌 다른 척도가 있어야 한다.

선분과 정사각형에서 길이와 면적이 어떻게 다른지를 본다. 한 변이 $1$ 인 정사각형을 한 변 $1/n$ 인 작은 정사각형 $n^2$ 개로 덮는다. 조각의 지름은 $\sqrt 2/n$ 규모다. 지름의 $1$ 제곱을 더하면 $n^2\cdot(\sqrt2/n)\approx n$ 으로 $n$ 과 함께 커지고, $2$ 제곱을 더하면 $n^2\cdot(2/n^2)=2$ 로 일정하다. 지수 $1$ 에서는 발산하고 $2$ 에서는 유한하다.

$$
\sum\_i(\mathrm{diam}\thinspace U\_i)^s \quad\text{에서}\quad s=1:\ \to\infty,\qquad s=2:\ \to 2
$$

$3$ 제곱을 더하면 $n^2\cdot(2/n^2)^{3/2}\to 0$ 이다. 지수를 키우면 합이 발산에서 유한을 거쳐 $0$ 으로 떨어지고, 정사각형에서 그 전환점이 $2$ 다. 전환점이 집합의 차원이다.

Cantor 집합에 같은 계산을 한다. $n$ 단계에서 지름 $3^{-n}$ 인 조각이 $2^n$ 개이므로 합이 $2^n\cdot 3^{-ns}=(2\cdot 3^{-s})^n$ 이다. 이 값은 $2\cdot 3^{-s}$ 가 $1$ 보다 크면 발산하고 작으면 $0$ 으로 간다. 전환점은 $2\cdot 3^{-s}=1$ 을 푼 $s=\log 2/\log 3\approx 0.63$ 이다. 측도가 $0$ 인 집합에 $0$ 과 $1$ 사이의 차원이 붙는다.

# 정의

$X$ 를 거리공간, $E\subseteq X$, $s\ge 0$ 이라 한다. 지름이 $\delta$ 이하인 덮개로 $s$ 제곱 합의 하한을 잡는다.

$$
\mathcal H^s\_\delta(E)=\inf\Big\lbrace \sum\_{i=1}^\infty(\mathrm{diam}\thinspace U\_i)^s : E\subseteq\bigcup\_i U\_i,\thinspace \mathrm{diam}\thinspace U\_i\le\delta\Big\rbrace
$$

$\delta$ 가 작아지면 덮개의 선택이 줄어 하한이 커지므로 $\mathcal H^s\_\delta$ 는 $\delta$ 에 대해 단조다. 그 극한이 $s$ 차원 **Hausdorff 측도**다.

$$
\mathcal H^s(E)=\lim\_{\delta\to 0}\mathcal H^s\_\delta(E)=\sup\_{\delta\gt 0}\mathcal H^s\_\delta(E)
$$

$\mathcal H^s$ 는 외측도이므로 [Carathéodory 확장정리](caratheodory-extension.md)가 측도를 준다.

$E$ 의 **Hausdorff 차원**은 측도가 떨어지는 지점이다.

$$
\dim\_H E=\inf\lbrace s\ge 0:\mathcal H^s(E)=0\rbrace=\sup\lbrace s\ge 0:\mathcal H^s(E)=\infty\rbrace
$$

# 성질

## 지수에 따른 전환

**정리.** $s\lt t$ 이고 $\mathcal H^s(E)\lt\infty$ 이면 $\mathcal H^t(E)=0$ 이다.

증명의 요지. 지름이 $\delta$ 이하인 덮개에서 $(\mathrm{diam}\thinspace U\_i)^t\le\delta^{t-s}(\mathrm{diam}\thinspace U\_i)^s$ 이므로 $\mathcal H^t\_\delta(E)\le\delta^{t-s}\mathcal H^s\_\delta(E)$ 다. 오른쪽이 $\delta\to 0$ 에서 $0$ 으로 가므로 결론이 나온다.

따라서 $s\mapsto\mathcal H^s(E)$ 는 $\dim\_H E$ 보다 작은 $s$ 에서 $\infty$, 큰 $s$ 에서 $0$ 이다. 임계값에서의 값은 $0$, 유한한 양수, $\infty$ 가 모두 가능하다.

## 거리 외측도와 Borel 가측성

$\mathcal H^s$ 는 떨어진 두 집합에서 가법적이다. $\mathrm{dist}(A,B)\gt 0$ 이면 $\delta$ 를 그 거리보다 작게 잡아 덮개를 $A$ 쪽과 $B$ 쪽으로 가를 수 있으므로 $\mathcal H^s(A\cup B)=\mathcal H^s(A)+\mathcal H^s(B)$ 다. 이 성질을 가진 외측도에서는 Borel 집합이 모두 Carathéodory 가측이고, 그 판정이 Carathéodory 판정이다.[^1]

## Lebesgue 측도와의 관계

$\mathbb R^n$ 에서 $\mathcal H^n$ 은 Lebesgue 측도의 상수배다. 상수는 단위공의 부피와 지름의 규격에서 나오고, 지름 대신 반지름을 쓰는 규격을 택하면 $1$ 이 된다. 따라서 $\dim\_H\mathbb R^n=n$ 이고 열린집합의 차원은 $n$ 이다. $n-1$ 차원 Hausdorff 측도가 초곡면의 면적을 재며 [등주부등식](isoperimetric-inequality.md)이 그 측도로 진술된다.

## 기본 성질

- 단조성. $E\subseteq F$ 이면 $\dim\_H E\le\dim\_H F$ 다.
- 가산 합집합. $\dim\_H\bigcup\_n E\_n=\sup\_n\dim\_H E\_n$ 이다. 가산 집합의 차원은 $0$ 이다.
- Lipschitz 사상. $f$ 가 Lipschitz 상수 $L$ 을 가지면 $\mathcal H^s(f(E))\le L^s\mathcal H^s(E)$ 이므로 $\dim\_H f(E)\le\dim\_H E$ 다. 양방향 Lipschitz 사상은 차원을 보존한다.
- 위상동형은 차원을 보존하지 않는다. Cantor 집합과 $\lbrace 0,1\rbrace^{\mathbb N}$ 의 다른 거리화가 다른 차원을 준다.

## 자기유사 집합

$E$ 가 비율 $r\_1,\dots,r\_m$ 의 축소 닮음사상 $m$ 개의 상의 합집합이고 그 상들이 거의 겹치지 않으면, 차원은 다음을 푼 $s$ 다.[^2]

$$
\sum\_{i=1}^m r\_i^s=1
$$

Cantor 집합은 $m=2$, $r\_i=1/3$ 이므로 $s=\log 2/\log 3$ 이다. Koch 곡선은 $m=4$, $r\_i=1/3$ 이므로 $\log 4/\log 3$ 이고, Sierpiński 삼각형은 $m=3$, $r\_i=1/2$ 이므로 $\log 3/\log 2$ 다. 겹침이 없다는 조건은 열린집합 조건으로 적는다.

## 상자 차원과의 비교

지름 $\delta$ 인 격자 상자로 덮는 데 필요한 개수 $N(\delta)$ 로 정의한 상자 차원은 $\lim\_{\delta\to 0}\log N(\delta)/\log(1/\delta)$ 다. 늘 $\dim\_H E\le\underline{\dim}\_B E$ 이고 자기유사 집합에서는 세 값이 같다. 두 차원이 다른 예로 $\lbrace 1/n:n\in\mathbb N\rbrace$ 이 있고, Hausdorff 차원은 $0$ 이지만 상자 차원은 $1/2$ 다.

# 활용

## 자기유사 집합의 크기 비교

Lebesgue 측도가 모두 $0$ 인 집합들을 차원으로 가른다. [Cantor 집합](cantor-set.md)은 $\log 2/\log 3$, 평면의 Sierpiński 삼각형은 $\log 3/\log 2$ 이고, 가산 집합은 $0$ 이다. [강 측도 영집합](strong-measure-zero.md)과 달리 차원은 덮개의 길이를 미리 지정하지 않고 지수만으로 재는 척도다.

## 디오판토스 근사

Liouville 수 전체의 집합과 나쁘게 근사되는 수 전체의 집합은 Lebesgue 측도가 $0$ 이면서 Hausdorff 차원이 $1$ 이다. [디오판토스 근사](diophantine-approximation.md)의 Jarník–Besicovitch 정리는 근사 지수가 $\tau$ 를 넘는 수들의 집합의 차원이 $2/\tau$ 임을 준다.

## 기하적 측도론의 면적

$k$ 차원 Hausdorff 측도가 $\mathbb R^n$ 안의 $k$ 차원 집합에 면적을 준다. 곡면의 면적을 매개화 없이 정의할 수 있어 변분 문제의 해를 집합의 모임에서 찾을 수 있고, 극소곡면과 등주 문제의 현대적 서술이 이 측도를 쓴다.

## 동역학계의 불변집합

쌍곡 동역학계의 반복자 집합과 [Julia 집합](julia-set.md)의 차원이 계의 확장률로 계산된다. Bowen 공식이 압력 함수의 영점으로 차원을 주며, 모수를 움직일 때 차원이 연속으로 변하는 것이 반복함수계의 구조를 재는 척도가 된다.

[^1]: Kenneth Falconer, *Fractal Geometry: Mathematical Foundations and Applications*, 3rd ed., Wiley, 2014, 2장과 3장 (Hausdorff 측도와 차원의 정의, 거리 외측도의 Borel 가측성, 기본 성질).

[^2]: John E. Hutchinson, "Fractals and self similarity", *Indiana University Mathematics Journal* 30 (1981), 713–747. 열린집합 조건 아래 자기유사 집합의 차원 공식.

# 연관 문서

## 선수지식

- [Carathéodory 확장정리](caratheodory-extension.md)
- [Cantor 집합](cantor-set.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #analysis #topology
