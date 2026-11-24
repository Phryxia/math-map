# Sophie Germain 정리

# 개요

**Sophie Germain 정리(Sophie Germain's theorem)** 는 홀수 소수 $p$ 에 대해 $2p+1$ 도 소수이면, $x^p+y^p=z^p$ 가 $p$ 로 나누어지지 않는 정수 $x,y,z$ 로는 풀리지 않는다는 정리다. $p=5$ 이면 $11$ 이 소수이고, 법 $11$ 에서 다섯제곱은 $0$, $1$, $-1$ 셋뿐이다. $\pm 1$ 세 개를 더해서는 $0$ 이 나오지 않으므로 $x,y,z$ 가운데 하나가 $11$ 의 배수여야 하고, 이 정리는 그 배수 조건을 인수분해와 엮어 모순으로 끝낸다.

# 직관

$p=5$ 에서 $x^5+y^5+z^5=0$ 을 생각한다. $z$ 의 부호를 바꾸면 $x^5+y^5=z^5$ 과 같은 방정식이다. 법 $11$ 에서 $a^{10}\equiv 1$ 이므로 $a^5$ 은 제곱해서 $1$ 이 되는 수, 곧 $1$ 이나 $-1$ 이다.

$11$ 의 배수가 아닌 $x,y,z$ 에서 $x^5+y^5+z^5$ 은 법 $11$ 에서 $\pm 1$ 세 개의 합이므로 $\pm 1$ 이나 $\pm 3$ 이고 $0$ 이 아니다. 그래서 $11$ 이 $xyz$ 를 나눈다.

남은 일은 $11\mid x$ 같은 경우를 없애는 것이다. 다음과 같이 인수분해한다.

$$
-x^5=y^5+z^5=(y+z)(y^4-y^3z+y^2z^2-yz^3+z^4)
$$

두 인수가 서로소이고 곱이 다섯제곱이므로 각각이 다섯제곱이다. 이 다섯제곱들을 다시 법 $11$ 로 보면 $5$ 가 법 $11$ 에서 다섯제곱이어야 한다는 결론이 나온다. $5$ 는 $0$, $1$, $-1$ 가운데 어느 것과도 합동이 아니므로 모순이다.

# 정의

$p$ 와 $2p+1$ 이 둘 다 소수인 $p$ 를 **Sophie Germain 소수(Sophie Germain prime)** 라 한다. $2, 3, 5, 11, 23, 29, 41, 53$ 이 그 예다.

$x^p+y^p=z^p$ 의 해 가운데 $p\nmid xyz$ 인 것을 다루는 경우를 [Fermat 마지막 정리](fermats-last-theorem.md)의 **첫째 경우(first case)** 라 한다. 직관 절은 $p=5$ 에서 첫째 경우의 해가 없음을 보인 것이다.

$\theta$ 가 소수이고 $\theta\nmid a$ 일 때, $a\equiv b^p\pmod\theta$ 인 $b$ 가 있으면 $a$ 를 법 $\theta$ 의 $p$ 제곱 잉여라 한다. 법 $11$ 의 다섯제곱 잉여는 $1$ 과 $10$ 이다.

# 성질

## 정리의 진술

$p$ 가 홀수 소수이고 소수 $\theta$ 가 다음 두 조건을 만족하면 첫째 경우의 해가 없다.[^1]

1. 법 $\theta$ 에서 $0$ 이 아닌 두 $p$ 제곱 잉여의 차가 $1$ 이 아니다.
2. $p$ 가 법 $\theta$ 의 $p$ 제곱 잉여가 아니다.

$\theta=2p+1$ 이 소수이면 $p$ 제곱 잉여는 $\pm 1$ 뿐이어서 차가 $0$ 이나 $\pm 2$ 이고, $p$ 는 $\pm 1$ 과 합동이 아니므로 두 조건이 성립한다. 이것이 개요의 진술이다.

## 정리의 증명

$x^p+y^p+z^p=0$ 이고 $x,y,z$ 가 쌍마다 서로소이며 $p\nmid xyz$ 라 하자. 다음 인수분해에서 두 인수는 $p\nmid x$ 이므로 서로소다.

$$
-x^p=(y+z)\thinspace\frac{y^p+z^p}{y+z}
$$

따라서 $y+z=a^p$, $(y^p+z^p)/(y+z)=\alpha^p$ 이고, 같은 방법으로 $z+x=b^p$, $x+y=c^p$ 이다. 조건 1 로 $\theta$ 가 $xyz$ 를 나누고, $\theta\mid x$ 로 두면 $b^p+c^p+(-a)^p=2x\equiv 0$ 에 다시 조건 1 을 써서 $\theta\mid a$ 가 나온다. 그러면 $y\equiv -z$ 이고 $\alpha^p\equiv py^{p-1}$ 인데, $y\equiv c^p$ 가 $p$ 제곱 잉여이므로 $p$ 도 $p$ 제곱 잉여가 되어 조건 2 와 어긋난다.

## 보조 소수의 확장

Legendre 는 $\theta=2kp+1$ 꼴의 보조 소수를 찾아 두 조건을 확인하는 방법으로, $p\lt 197$ 인 모든 홀수 소수에서 첫째 경우를 증명했다.[^1] 법 $2kp+1$ 에서 $p$ 제곱 잉여는 $2k$ 개이므로 $k$ 가 작을수록 조건 1 을 확인하기 쉽다.

## 무한히 많은 지수

Adleman, Heath-Brown, Fouvry 는 Sophie Germain 정리의 판정을 체 방법과 결합해, 첫째 경우가 성립하는 소수 $p$ 가 무한히 많음을 보였다.[^2]

# 활용

- [Fermat 마지막 정리](fermats-last-theorem.md). Kummer 의 방법 이전에 첫째 경우를 지수별로 확인하는 주된 판정이었다.
- [Wieferich 소수](wieferich-primes.md). Wieferich 정리는 같은 첫째 경우를 $2^{p-1}\bmod p^2$ 의 계산으로 바꾸는 다른 판정이다.
- 암호. 안전 소수(safe prime)라 부르는 $2p+1$ 꼴의 소수는 법 $2p+1$ 의 가역원군의 위수 $2p$ 가 큰 소인수 $p$ 를 갖게 하므로, [이산로그](discrete-logarithm.md)를 쓰는 암호에서 [Pohlig–Hellman 방법](pohlig-hellman.md)을 막는 데 쓰인다.

[^1]: A.-M. Legendre, "Recherches sur quelques objets d'analyse indéterminée et particulièrement sur le théorème de Fermat", *Mémoires de l'Académie Royale des Sciences de l'Institut de France* 6, 1827, pp. 1–60.
[^2]: L. M. Adleman, D. R. Heath-Brown, "The first case of Fermat's last theorem", *Inventiones Mathematicae* 79, 1985, pp. 409–416; É. Fouvry, "Théorème de Brun–Titchmarsh; application au théorème de Fermat", *Inventiones Mathematicae* 79, 1985, pp. 383–407.

# 연관 문서

## 선수지식

- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra
