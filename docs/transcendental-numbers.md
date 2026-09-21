# 초월수

# 개요

초월수는 정수계수 다항식의 근이 아닌 복소수다. 대수적 수 전체는 셀 수 있으므로 거의 모든 복소수가 초월수이지만, 주어진 수 하나가 초월수임을 보이는 것은 따로 증명할 일이다. $e$ 와 $\pi$ 의 초월성은 지수함수가 대수적 점에서 갖는 값에 대한 정리에서 나오고, 그 정리가 원적 문제를 끝냈다.

# 직관

반지름 $1$ 인 원과 넓이가 같은 정사각형을 자와 컴퍼스로 그리려 한다. 한 변의 길이는 $\sqrt\pi$ 다. 작도로 얻는 길이는 유리수에서 제곱근을 거듭 붙여 나오므로 전부 정수계수 다항식의 근이고, $\pi$ 를 근으로 갖는 정수계수 다항식이 하나도 없으면 이 작도는 불가능하다. 차수에 제한이 없으니 다항식을 하나씩 확인해서는 끝나지 않는다.

먼저 $e$ 가 유리수가 아님을 보인다. $e = \sum_{k \ge 0} 1/k!$ 이다. $e = a/b$ 라 하면 $b! \thinspace e$ 는 정수이고, 급수를 $k \le b$ 와 $k \gt b$ 로 끊으면 앞부분 $\sum_{k \le b} b!/k!$ 도 정수다. 남는 꼬리는 양수이고

$$
\sum_{k \gt b} \frac{b!}{k!} \thinspace\lt\thinspace \sum_{j \ge 1} \frac{1}{(b+1)^j} \thinspace=\thinspace \frac{1}{b}
$$

이므로 $1$ 이하다. 정수에서 정수를 뺀 값이 $0$ 과 $1$ 사이에 놓였으므로 $e = a/b$ 는 성립하지 않는다.

이제 $e$ 가 정수계수 관계식 $a\_0 + a\_1 e + \dots + a\_n e^n = 0$ 을 만족한다고 두고 같은 모순을 만든다. 유리수일 때 $b!$ 을 곱해 각 항을 정수로 만든 자리에, 다항식 $f$ 로 만든 적분

$$
I(t) \thinspace=\thinspace \int_0^t e^{t-x} f(x) \thinspace dx \thinspace=\thinspace e^t \sum_{j \ge 0} f^{(j)}(0) - \sum_{j \ge 0} f^{(j)}(t)
$$

를 놓는다. 오른쪽 등식은 부분적분을 반복해 얻는다. $\sum_k a_k I(k)$ 를 만들면 $e^k$ 가 붙은 항이 관계식으로 전부 사라지고 $f$ 의 도함수 값만 남으므로, $f$ 를 잘 고르면 이 값이 $0$ 이 아닌 정수이면서 절댓값이 $1$ 보다 작아진다. $\pi$ 는 $e^{i\pi} = -1$ 에 같은 계산을 넣어 걸린다.

# 정의

## 초월수

복소수 $\alpha$ 가 **초월수**라는 것은 $f(\alpha) = 0$ 인 $0$ 이 아닌 $f \in \mathbb Q\lbrack x\rbrack$ 가 없다는 뜻이다. 그런 $f$ 가 있으면 **대수적 수**다. 분모를 곱해 없앨 수 있으므로 계수를 정수로 잡아도 같은 정의다.

대수적 수 전체의 집합 $\overline{\mathbb Q}$ 는 체이고 대수적으로 닫혀 있다. 초월수 전체는 그 여집합이며 체가 아니다. $\alpha$ 가 초월수이면 $1 - \alpha$ 도 초월수이고 둘의 합은 $1$ 이다.

## 초월 원소와 초월 차수

[체의 확대](field-extensions.md) $K/k$ 에서 원소 $\alpha \in K$ 가 $k$ 위 초월적이라는 것은 $k$ 계수 다항식의 근이 아니라는 뜻이고, 이때 $k(\alpha)$ 는 유리함수체 $k(x)$ 와 동형이다. $K$ 의 부분집합 $S$ 가 $k$ 위 대수적으로 독립이고 $K/k(S)$ 가 대수적이면 $S$ 를 **초월 기저**라 하며, 그 크기를 **초월 차수**라 한다. 초월수는 $k = \mathbb Q$, $K = \mathbb C$ 인 경우의 초월 원소다.

# 성질

## 초월수의 존재

**정리(Cantor)**[^1]**.** 대수적 수 전체는 셀 수 있다. 따라서 초월수가 존재하고 실수 가운데 초월수 전체는 [셀 수 없다](cardinality.md).

차수 $d$ 이고 계수의 절댓값이 $H$ 이하인 정수계수 다항식은 유한 개이고 각각 근이 $d$ 개 이하다. $\overline{\mathbb Q}$ 는 이런 유한집합을 $d$ 와 $H$ 에 걸쳐 모은 것이므로 셀 수 있는 집합의 셀 수 있는 합집합이다. 실수는 셀 수 없으므로 초월수가 남는다. ∎

$\overline{\mathbb Q} \cap \mathbb R$ 은 Lebesgue [측도](measure.md)가 $0$ 이다. 초월성이 개별 수에서 증명하기 어려운 성질인 것과 거의 모든 실수가 초월수인 것이 함께 성립한다.

## Hermite–Lindemann 정리

**정리**[^2]**.** $\alpha$ 가 $0$ 이 아닌 대수적 수이면 $e^\alpha$ 는 초월수다.

$e^\alpha$ 가 대수적이라 하면 $\alpha$ 와 $e^\alpha$ 의 켤레들을 묶어 정수계수 관계식을 만들 수 있다. 소수 $p$ 마다 보조 다항식

$$
f(x) \thinspace=\thinspace \frac{x^{p-1}\prod_{i}(x - \alpha_i)^p}{(p-1)!}
$$

와 적분 $I(t) = \int_0^t e^{t-x} f(x)\thinspace dx$ 를 만든다. 관계식에 $I$ 를 대입해 얻은 값은 대수적 정수이고, $x = 0$ 에서의 $(p-1)$ 계 도함수만 $p$ 로 나누어떨어지지 않으므로 $p$ 가 관계식의 계수보다 크면 $0$ 이 아니다. 한편 적분 쪽은 $\vert f\vert$ 의 크기가 $(p-1)!$ 로 나뉘어 $p$ 를 키우면 $1$ 보다 작아진다. ∎

**따름정리.** $e$ 는 초월수다. $\pi$ 도 초월수다. $\pi$ 가 대수적이면 $i\pi$ 도 대수적이고 $e^{i\pi} = -1$ 이 초월수여야 하는데 $-1$ 은 대수적이다.

## Lindemann–Weierstrass 정리

**정리**[^3]**.** $\alpha\_1,\dots,\alpha\_n$ 이 서로 다른 대수적 수이면 $e^{\alpha\_1},\dots,e^{\alpha\_n}$ 은 $\overline{\mathbb Q}$ 위에서 일차독립이다.

$n = 1$ 인 경우가 Hermite–Lindemann 정리다. 증명은 같은 보조 다항식을 켤레 전체에 걸쳐 대칭이 되도록 확장한다.

**따름정리.** $\alpha$ 가 $0$ 이 아닌 대수적 수이면 $\sin\alpha$, $\cos\alpha$, $\tan\alpha$ 가 초월수다. $\alpha$ 가 $1$ 이 아닌 양의 대수적 수이면 $\log\alpha$ 가 초월수다.

## Gelfond–Schneider 정리

**정리**[^4]**.** $\alpha$ 가 $0$ 도 $1$ 도 아닌 대수적 수이고 $\beta$ 가 대수적 무리수이면 $\alpha^\beta$ 는 초월수다.

$2^{\sqrt 2}$ 와 $e^\pi = (-1)^{-i}$ 가 예다. 증명은 $\alpha^{\beta}$ 가 대수적이라는 가정 아래 $z \mapsto \alpha^{z}$ 의 값들로 보조함수를 만들어 격자점에서 높은 차수로 소멸하게 하고, 그 함수의 최대 절댓값을 원판 위에서 재어 $0$ 이 아닌 대수적 정수의 절댓값이 $1$ 보다 작다는 결론에 이른다.

Hilbert 가 1900년에 낸 일곱째 문제가 이 진술이다.

## Baker 정리

**정리**[^5]**.** $\alpha\_1,\dots,\alpha\_n$ 이 $0$ 이 아닌 대수적 수이고 $\log\alpha\_1,\dots,\log\alpha\_n$ 이 $\mathbb Q$ 위에서 일차독립이면, $1,\log\alpha\_1,\dots,\log\alpha\_n$ 은 $\overline{\mathbb Q}$ 위에서 일차독립이다.

$n = 1$ 이 Hermite–Lindemann 정리이고 $n = 2$ 가 Gelfond–Schneider 정리다. 여기에 더해 $0$ 이 아닌 일차형식 $\Lambda = \beta\_0 + \sum_i \beta\_i \log\alpha\_i$ 의 절댓값에 대해, $\alpha\_i$ 와 $\beta\_i$ 의 차수와 높이만으로 쓴 하한

$$
\vert\Lambda\vert \thinspace\gt\thinspace C(n, d, A)^{-\log B}
$$

가 성립한다. 상수를 계산할 수 있다는 점이 [Diophantine 근사](diophantine-approximation.md)의 Roth 정리와 다르고, 정수해의 크기에 실제 상한을 주는 것이 이 차이에서 나온다.

# 활용

- 원적 문제가 불가능하다. [Galois 이론](galois-theory.md)의 작도 판정은 작도 가능한 수가 차수 $2$ 의 거듭제곱인 대수적 수임을 말하므로, $\pi$ 가 초월수이면 $\sqrt\pi$ 는 작도되지 않는다.
- Baker 정리의 하한이 Thue 방정식 $F(x,y) = m$ 의 정수해에 계산 가능한 크기 상한을 준다. Roth 정리는 해의 개수만 묶지만 이 하한은 해를 모두 찾는 절차를 준다.
- 류수가 $1$ 인 허수 이차체의 판별식이 아홉 개뿐이라는 것이 로그의 일차형식 하한으로 증명된다. [대수적 수체](algebraic-number-fields.md)의 류군 계산에서 같은 하한을 쓴다.
- 지수함수와 로그의 특수값이 서로 어떤 대수적 관계도 갖지 않음을 진술할 때 쓰인다. $e$ 와 $\pi$ 가 $\overline{\mathbb Q}$ 위에서 대수적으로 독립인지는 Schanuel 추측의 한 경우다.

[^1]: G. Cantor, "Über eine Eigenschaft des Inbegriffes aller reellen algebraischen Zahlen", *Journal für die reine und angewandte Mathematik* 77 (1874), 258–262.

[^2]: C. Hermite, "Sur la fonction exponentielle", *Comptes Rendus de l'Académie des Sciences* 77 (1873), 18–24. $e$ 의 초월성을 보였고, F. Lindemann, "Über die Zahl $\pi$", *Mathematische Annalen* 20 (1882), 213–225 가 대수적 $\alpha$ 로 확장해 $\pi$ 의 초월성을 얻었다.

[^3]: K. Weierstrass, "Zu Lindemann's Abhandlung: 'Über die Ludolph'sche Zahl'", *Sitzungsberichte der Königlich Preussischen Akademie der Wissenschaften zu Berlin* (1885), 1067–1085.

[^4]: A. O. Gelfond, "Sur le septième problème de Hilbert", *Известия Академии наук СССР* 7 (1934), 623–634. Th. Schneider, "Transzendenzuntersuchungen periodischer Funktionen", *Journal für die reine und angewandte Mathematik* 172 (1934), 65–69 가 같은 해에 독립으로 증명했다.

[^5]: A. Baker, "Linear forms in the logarithms of algebraic numbers I", *Mathematika* 13 (1966), 204–216.

# 연관 문서

## 선수지식

- [체의 확대](field-extensions.md)
- [Diophantine 근사](diophantine-approximation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory #analysis
