# Diophantine 근사

# 개요

Diophantine 근사는 실수를 유리수로 근사할 때 분모의 크기에 견준 오차가 얼마나 작아질 수 있는지 재는 분야다. 척도는 $\vert \alpha - p/q\vert$ 를 $q^{-\mu}$ 와 견주어 얻는 근사 지수이고, 이 지수가 그 수의 산술적 성격을 가른다.

대수적 수는 차수에 따라 근사가 막히고, 그 한계를 넘도록 만든 수는 초월수가 된다. Roth 정리는 대수적 무리수의 근사 지수가 모두 $2$ 임을 말하고, Khinchin 정리는 거의 모든 실수의 근사 속도를 측도의 언어로 정한다.

# 직관

실수가 대수적인지 초월적인지 판정하려 한다. 정의대로 하려면 그 수를 근으로 갖는 정수계수 다항식이 하나도 없음을 보여야 하는데, 모든 차수의 모든 다항식을 확인할 수는 없다.

대신 유리수 근사가 얼마나 잘 되는지 잰다. 유리수 $a/b$ 와 다른 유리수 $p/q$ 의 거리는 통분하면 $\vert ap - bq \vert/(bq)$ 이고 분자가 $0$ 이 아닌 정수이므로 $1/(bq)$ 이상이다. 유리수는 분모가 $q$ 인 다른 유리수에 $1/q$ 규모까지만 가까워진다.

$\sqrt 2$ 로 같은 계산을 한다. $\vert \sqrt 2 - p/q\vert$ 에 $\sqrt 2 + p/q$ 를 곱하면 $\vert 2 - p^2/q^2\vert = \vert 2q^2 - p^2\vert/q^2$ 이고, 분자는 $0$ 이 아닌 정수라 $1$ 이상이다. $p/q$ 가 $\sqrt 2$ 근처에 있으면 $\sqrt 2 + p/q \lt 3$ 이므로 오차는 $1/(3q^2)$ 보다 크다.

두 계산이 같은 모양이다. 정수계수 다항식 $f$ 의 근에서는 $f(p/q)$ 의 분자가 $0$ 이 아닌 정수이므로 $\vert f(p/q)\vert \ge q^{-d}$ 이고, 이것이 오차를 아래에서 막는다. 차수가 $d$ 인 대수적 수는 $q^{-d}$ 규모보다 훨씬 좋게 근사되지 않는다.

그러면 어떤 $d$ 를 잡아도 $q^{-d}$ 보다 좋은 근사를 무한히 갖는 수를 만들면 그 수는 어느 차수의 대수적 수도 아니다. $\ell = 10^{-1} + 10^{-2} + 10^{-6} + 10^{-24} + \dots = \sum_{k \ge 1} 10^{-k!}$ 를 $n$ 항에서 끊으면 분모는 $q = 10^{n!}$ 이고 오차는 다음 항이 지배해 $10^{-(n+1)!} = q^{-(n+1)}$ 규모다. $n$ 을 키우면 지수가 얼마든지 커진다.

# 정의

## 근사 지수

무리수 $\alpha$ 의 **근사 지수**는 다음 값이다. 무리수 측도라고도 한다.

$$
\mu(\alpha) \thinspace=\thinspace \sup\lbrace \mu \gt 0 \thinspace\mid\thinspace 0 \lt \left\vert \alpha - \frac{p}{q}\right\vert \lt \frac{1}{q^{\mu}} \text{ 인 기약분수 } p/q \text{ 가 무한히 많다}\rbrace
$$

[연분수](continued-fractions.md)의 수렴분이 $\vert \alpha - p_k/q_k\vert \lt q_k^{-2}$ 를 주므로 모든 무리수에서 $\mu(\alpha) \ge 2$ 다.

## Liouville 수

$\mu(\alpha) = \infty$ 인 실수를 **Liouville 수**라 한다. 곧 모든 양의 정수 $n$ 에 대해 $0 \lt \vert \alpha - p/q\vert \lt q^{-n}$ 인 기약분수가 존재하는 수다.

## 나쁘게 근사되는 수

$\Vert x\Vert$ 를 $x$ 와 가장 가까운 정수의 거리라 할 때, 다음을 만족하는 $\alpha$ 를 **나쁘게 근사되는 수**라 한다.

$$
\inf_{q \ge 1} q \Vert q\alpha\Vert \thinspace\gt\thinspace 0
$$

연분수 전개의 몫 $a_k$ 가 유계인 것과 동치다.

# 성질

## Liouville 부등식

**정리**[^1]**.** $\alpha$ 가 차수 $d \ge 2$ 인 대수적 수이면 상수 $c(\alpha) \gt 0$ 이 있어 모든 기약분수 $p/q$ 에 대해 $\vert \alpha - p/q\vert \ge c(\alpha) q^{-d}$ 다.

$\alpha$ 의 최소다항식을 정수계수 $f$ 로 잡는다. $f$ 는 기약이므로 $f(p/q) \neq 0$ 이고, $q^d f(p/q)$ 가 $0$ 이 아닌 정수이므로 $\vert f(p/q)\vert \ge q^{-d}$ 다. 평균값 정리로 $f(p/q) = f(p/q) - f(\alpha) = f'(\xi)(p/q - \alpha)$ 인 $\xi$ 가 두 점 사이에 있고, $\vert \alpha - p/q\vert \le 1$ 인 범위에서 $\vert f'\vert$ 의 최댓값을 $M$ 이라 하면 $q^{-d} \le M \vert \alpha - p/q\vert$ 다. ∎

**따름정리.** Liouville 수는 초월수다. 특히 $\sum_{k \ge 1} 10^{-k!}$ 가 초월수다.

## Roth 정리

**정리(Roth)**[^2]**.** $\alpha$ 가 대수적 무리수이고 $\varepsilon \gt 0$ 이면 $\vert \alpha - p/q\vert \lt q^{-2-\varepsilon}$ 을 만족하는 기약분수는 유한 개다. 따라서 $\mu(\alpha) = 2$ 다.

Liouville 의 지수 $d$ 를 Thue 가 $d/2 + 1$ 로, Siegel 과 Dyson 이 더 낮추었고 Roth 가 $2$ 에 이르렀다. 증명은 여러 변수의 보조 다항식을 만들어 $\alpha$ 근처에서 높은 차수로 소멸하게 하고, 좋은 근사가 여럿 있으면 그 다항식의 지표가 모순을 일으킴을 보인다.

이 정리는 예외 분수의 개수를 한정하지만 그것들의 크기를 계산해 주지는 않는다. 상한을 실제로 계산할 수 있는 형태의 증명은 알려져 있지 않다.[^3]

## 측도론적 이분법

**정리(Khinchin)**[^4]**.** $\psi$ 가 양의 값을 갖는 단조 감소 함수일 때, $\vert \alpha - p/q\vert \lt \psi(q)/q$ 를 만족하는 기약분수를 무한히 많이 갖는 $\alpha$ 의 집합은 $\sum_{q \ge 1} \psi(q)$ 가 발산하면 [측도](measure.md) 가 전체이고 수렴하면 측도가 $0$ 이다.

$\psi(q) = q^{-\varepsilon}$ 을 넣으면 급수가 수렴하므로, 거의 모든 실수의 근사 지수가 $2$ 다. Liouville 수 전체의 집합과 나쁘게 근사되는 수 전체의 집합은 모두 측도가 $0$ 이지만, 두 집합 모두 Hausdorff 차원이 $1$ 이다.[^5]

## 동시 근사

**정리(Dirichlet)**[^6]**.** 실수 $\alpha_1,\dots,\alpha_n$ 과 양의 정수 $Q$ 에 대해 $1 \le q \le Q^n$ 이면서 모든 $i$ 에서 $\vert q\alpha_i - p_i\vert \lt 1/Q$ 인 정수 $q, p_1,\dots,p_n$ 이 있다.

[비둘기집 원리](pigeonhole-principle.md)를 $n$ 차원 격자칸에 적용한 것이다. 한 변수일 때의 지수 $2$ 가 여기서는 $1 + 1/n$ 으로 바뀌고, Roth 정리의 다차원 확장인 부분공간 정리가 대수적 수에 대해 이 지수를 개선한다.

# 활용

- 초월수의 첫 구성이 이 이론에서 나왔다. Liouville 부등식이 초월성을 근사 속도만으로 판정하므로, $e$ 나 $\pi$ 의 초월성 증명보다 앞서 초월수의 예가 나왔다.
- Thue 방정식 $F(x,y) = m$ 의 정수해가 유한 개임을 준다. $F$ 가 차수 $3$ 이상인 기약 이진형식이면 해는 $F$ 의 근 가운데 하나를 $x/y$ 로 잘 근사하므로, Roth 정리가 그런 쌍의 개수를 묶는다.
- 원 위의 회전 $x \mapsto x + \alpha$ 를 매끄럽게 선형화할 수 있는지가 $\alpha$ 의 근사 지수에 달려 있다. 분모가 작은 유리수로 잘 근사되는 $\alpha$ 에서는 Fourier 계수의 분모가 작아져 급수가 발산한다.
- [대수적 수체](algebraic-number-fields.md)의 단수와 정수해를 셀 때 높이 함수의 상한으로 쓰인다. 근사 부등식이 높이가 큰 해의 존재를 막는 형태로 들어간다.

[^1]: J. Liouville, "Sur des classes très étendues de quantités dont la valeur n'est ni algébrique, ni même réductible à des irrationnelles algébriques", *Journal de Mathématiques Pures et Appliquées* 16 (1851), 133–142.

[^2]: K. F. Roth, "Rational approximations to algebraic numbers", *Mathematika* 2 (1955), 1–20.

[^3]: E. Bombieri and W. Gubler, *Heights in Diophantine Geometry*, Cambridge University Press (2006), Ch. 6. Roth 정리의 증명이 예외의 크기에 대한 상한을 주지 않는다는 점과 그 이유를 설명한다.

[^4]: A. Khintchine, "Einige Sätze über Kettenbrüche, mit Anwendungen auf die Theorie der Diophantischen Approximationen", *Mathematische Annalen* 92 (1924), 115–125.

[^5]: V. Jarník, "Zur metrischen Theorie der diophantischen Approximationen", *Prace Matematyczno-Fizyczne* 36 (1929), 91–106. 나쁘게 근사되는 수의 집합이 Hausdorff 차원 $1$ 임을 보인다.

[^6]: W. M. Schmidt, *Diophantine Approximation*, Lecture Notes in Mathematics 785, Springer (1980), Ch. II. 동시 근사의 Dirichlet 정리와 부분공간 정리가 이 책의 주제다.

# 연관 문서

## 선수지식

- [연분수](continued-fractions.md)

## 더 알아보기

- [초월수](transcendental-numbers.md)

#number_theory #analysis #measure_theory
