# Cauchy 근 한계

# 개요

**Cauchy 근 한계(Cauchy bound)** 는 다항식의 계수만으로 모든 근이 들어 있는 원판의 반지름을 주는 부등식이다. $p(x)=x^4-10x^3+35x^2-50x+24$ 의 근을 [중간값 정리](intermediate-value-theorem.md)의 이분법이나 [Durand–Kerner 법](durand-kerner-method.md)으로 찾으려면, 근을 모르는 채로 근이 모두 들어 있는 구간이나 원을 먼저 정해야 한다. Cauchy 근 한계는 계수의 절댓값 가운데 가장 큰 $50$ 에 $1$ 을 더해, 모든 근의 절댓값이 $51$ 보다 작다고 답한다.

# 직관

$\lvert x\rvert$ 가 크면 $p(x)$ 에서 최고차항 $x^4$ 이 나머지 항을 압도하고, 그런 $x$ 는 근이 될 수 없다. 나머지 항의 계수를 모두 가장 큰 절댓값 $50$ 으로 키우면, $\lvert x\rvert\gt 1$ 에서 다음이 성립한다.

$$
\lvert -10x^3+35x^2-50x+24\rvert\le 50\left(\lvert x\rvert^3+\lvert x\rvert^2+\lvert x\rvert+1\right)\lt\frac{50\lvert x\rvert^4}{\lvert x\rvert-1}
$$

오른쪽은 $\lvert x\rvert-1\ge 50$ 이면 $\lvert x\rvert^4$ 이하다. 그러면 최고차항의 크기가 나머지 항의 합보다 커서 $p(x)\ne0$ 이다. 그래서 근은 모두 $\lvert x\rvert\lt 51$ 에 있다.

이 $p$ 의 실제 근은 $1$, $2$, $3$, $4$ 이고 $51$ 은 많이 큰 값이다. 계수를 모두 $50$ 으로 키운 것이 손실이므로, 차수마다 계수의 크기를 따로 보면 한계가 작아진다. 정의 절의 Fujiwara 한계는 $20$, Cauchy 다항식의 양근은 $12.9993$ 을 준다.

# 정의

$p(z)=\sum_{k=0}^n a_kz^k$ 는 복소수 계수이고 $a_n\ne0$ 인 $n$ 차 다항식이다.

## Cauchy 근 한계

$M=\max_{0\le k\lt n}\lvert a_k/a_n\rvert$ 로 두면 $p$ 의 모든 근 $z$ 가 다음을 만족한다.

$$
\lvert z\rvert\lt 1+M
$$

직관 절의 예에서 $M=50$ 이고 한계는 $51$ 이다.

## Cauchy 다항식의 양근

$p$ 의 계수에서 다음 다항식을 만든다.

$$
q(x)=\lvert a_n\rvert x^n-\sum_{k=0}^{n-1}\lvert a_k\rvert x^k
$$

$a_0,\dots,a_{n-1}$ 이 모두 $0$ 은 아니면 $q$ 는 양의 실근을 정확히 하나 갖는다. 그 근을 $R$ 이라 하면 $p$ 의 모든 근이 $\lvert z\rvert\le R$ 을 만족한다.

직관 절의 예에서 $q(x)=x^4-10x^3-35x^2-50x-24$ 이고 $R=12.9993$ 이다. $R$ 은 [Newton 법](newton-method.md)이나 이분법으로 구한다.

## Fujiwara 한계

**Fujiwara 한계(Fujiwara bound)** 는 다음이다.[^1]

$$
\lvert z\rvert\le 2\max\left(\left\lvert\frac{a_{n-1}}{a_n}\right\rvert,\thinspace\left\lvert\frac{a_{n-2}}{a_n}\right\rvert^{1/2},\thinspace\dots,\thinspace\left\lvert\frac{a_1}{a_n}\right\rvert^{1/(n-1)},\thinspace\left\lvert\frac{a_0}{2a_n}\right\rvert^{1/n}\right)
$$

$x^{n-k}$ 의 계수에 $k$ 제곱근을 씌워, 근의 크기와 같은 단위로 맞춘 뒤 비교한다. 직관 절의 예에서 네 값은 $10$, $\sqrt{35}=5.92$, $50^{1/3}=3.68$, $12^{1/4}=1.86$ 이고 한계는 $2\cdot10=20$ 이다.

# 성질

## Cauchy 근 한계의 증명

정리. $p(z)=0$ 이면 $\lvert z\rvert\lt 1+M$ 이다.

증명의 요지. $\lvert z\rvert\le 1$ 이면 $1+M$ 보다 작으므로 $\lvert z\rvert\gt 1$ 인 경우만 본다. 등비급수의 합으로 다음이 나온다.

$$
\left\lvert\sum_{k=0}^{n-1}a_kz^k\right\rvert\le\lvert a_n\rvert M\sum_{k=0}^{n-1}\lvert z\rvert^k\lt\lvert a_n\rvert M\frac{\lvert z\rvert^n}{\lvert z\rvert-1}
$$

$\lvert z\rvert\ge 1+M$ 이면 오른쪽이 $\lvert a_nz^n\rvert$ 이하이므로 $p(z)\ne0$ 이다.

## Cauchy 다항식의 양근이 가장 작은 한계

정리. $p$ 의 모든 근은 $\lvert z\rvert\le R$ 에 있다. 계수의 절댓값 $\lvert a_0\rvert,\dots,\lvert a_n\rvert$ 만으로 정하는 한계 가운데 $R$ 보다 작은 것은 없다.

증명의 요지. $q(x)/x^n=\lvert a_n\rvert-\sum_{k\lt n}\lvert a_k\rvert x^{k-n}$ 은 $x\gt 0$ 에서 순증가하고 $0$ 근처에서 음수, 무한대에서 양수이므로 양근이 하나다. $\lvert z\rvert\gt R$ 이면 $q(\lvert z\rvert)\gt 0$ 이고, 삼각부등식으로 다음이 나온다.

$$
\lvert a_nz^n\rvert\gt\sum_{k\lt n}\lvert a_k\rvert\lvert z\rvert^k\ge\left\lvert\sum_{k\lt n}a_kz^k\right\rvert
$$

그래서 $p(z)\ne0$ 이다. 한편 계수가 $\lvert a_n\rvert$ 와 $-\lvert a_k\rvert$ 인 다항식 $q$ 자신이 같은 절댓값들을 갖고 근 $R$ 을 가지므로, 절댓값만 쓰는 한계는 $R$ 보다 작을 수 없다.

$1+M$ 과 Fujiwara 한계도 계수의 절댓값만 쓰므로 둘 다 $R$ 이상이다. 직관 절의 예에서 $12.9993\le 20\le 51$ 이다.

## Fujiwara 한계의 증명

정리. $p(z)=0$ 이면 $\lvert z\rvert$ 는 Fujiwara 한계 $F$ 이하다.

증명의 요지. $F$ 의 정의로 $k\lt n$ 에서 $\lvert a_{n-k}/a_n\rvert\le(F/2)^k$ 이고 $\lvert a_0/a_n\rvert\le 2(F/2)^n$ 이다. $\lvert z\rvert\gt F$ 이면 $t=F/(2\lvert z\rvert)\lt 1/2$ 이고 다음이 성립한다.

$$
\sum_{k=1}^{n}\left\lvert\frac{a_{n-k}}{a_n}\right\rvert\lvert z\rvert^{n-k}\le\lvert z\rvert^n\left(\sum_{k=1}^{n-1}t^k+2t^n\right)\lt\lvert z\rvert^n
$$

마지막 부등식은 $t=1/2$ 에서 괄호가 $1-2^{1-n}+2^{1-n}=1$ 이고 괄호가 $t$ 에 대해 증가하는 데서 나온다. 그래서 최고차항이 나머지보다 크고 $p(z)\ne0$ 이다.

## 근의 하한

$a_0\ne0$ 이면 $z^np(1/z)=\sum_k a_{n-k}z^k$ 의 근은 $p$ 의 근의 역수다. 이 다항식에 Cauchy 근 한계를 쓰면 $p$ 의 모든 근이 다음을 만족한다.

$$
\lvert z\rvert\gt\frac{\lvert a_0\rvert}{\lvert a_0\rvert+\max_{1\le k\le n}\lvert a_k\rvert}
$$

직관 절의 예에서 하한은 $24/74=0.324$ 이다. 근은 모두 원환 $0.324\lt\lvert z\rvert\lt 51$ 에 있다.

# 활용

- 동시 반복의 초깃값. Durand–Kerner 법과 Aberth 법(Aberth method)은 근의 개수만큼의 점을 원 위에 고르게 놓고 시작하며, 그 원의 반지름을 Cauchy 다항식의 양근이나 Fujiwara 한계로 정한다.
- 실근의 분리. 실근은 모두 $\lbrack -R,R\rbrack$ 에 있으므로, [Sturm 정리](sturm-theorem.md)로 구간 안의 실근의 개수를 세며 이 구간을 반씩 나누면 실근을 하나씩 가둔 구간들을 얻는다.
- [Graeffe 근 제곱법](graeffe-method.md)이 근의 크기를 걸음마다 제곱해 계수의 비로 읽는 것과 견주면, Cauchy 근 한계는 변환 없이 계수에서 바로 한 번에 얻는 어림이다. 계수가 모두 양수이고 단조이면 [Eneström–Kakeya 정리](enestrom-kakeya-theorem.md)가 이웃한 계수의 비로 더 좁은 원환을 준다.

[^1]: M. Fujiwara, "Über die obere Schranke des absoluten Betrages der Wurzeln einer algebraischen Gleichung", Tôhoku Mathematical Journal 10 (1916), 167–171.

# 연관 문서

## 선수지식

- [대수학의 기본정리](fundamental-theorem-of-algebra.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra #algorithms
