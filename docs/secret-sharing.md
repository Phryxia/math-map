# 비밀 분산

# 개요

**비밀 분산(secret sharing)** 은 비밀 하나를 $n$ 개의 조각으로 나눠, 정해진 수 $t$ 개 이상의 조각이 모이면 비밀이 복원되고 $t-1$ 개 이하의 조각으로는 비밀에 대해 아무 정보도 얻지 못하게 하는 방법이다. Shamir 와 Blakley 가 1979 년에 따로 제안했다[^1][^2].

Shamir 의 방식은 [유한체](finite-fields.md) 위의 다항식을 쓴다. 조각은 다항식의 함숫값이고, 복원은 [다항식 보간](polynomial-interpolation.md)이다.

# 직관

다섯 명 가운데 아무 두 명이 모이면 금고를 열 수 있고 한 명으로는 열 수 없게 하려 한다. 금고 번호를 다섯 토막으로 잘라 나눠 주면 두 명이 모여도 토막 둘만 알고, 한 명은 번호의 일부를 안다. 토막 내기로는 두 조건이 모두 깨진다.

금고 번호 $s$ 를 $y$ 절편으로 하는 직선 $y=s+ax$ 를 기울기 $a$ 를 무작위로 골라 정한다. 사람 $i$ 에게는 직선 위의 점 $(i,\thinspace s+ai)$ 를 준다. 두 명이 모이면 두 점을 지나는 직선이 하나뿐이므로 $y$ 절편 $s$ 가 나온다.

한 명이 가진 점 하나를 지나는 직선은 $y$ 절편이 어떤 값이든 하나씩 있다. 기울기가 무작위였으므로 그 사람이 보기에 모든 $y$ 절편이 같은 확률이고, 점 하나로는 $s$ 에 대해 아무것도 알 수 없다. 세 명이 있어야 열리게 하려면 직선 대신 이차식을 쓴다.

# 정의

## 문턱 방식

$n$ 명에 대한 **$(t,n)$ 문턱 방식(threshold scheme)** 은 비밀 $s$ 와 난수로부터 조각 $\sigma\_1,\dots,\sigma\_n$ 을 만드는 분배 알고리즘으로서 다음 두 성질을 만족하는 것이다.

- 복원. $t$ 개 이상의 조각으로부터 $s$ 를 계산하는 알고리즘이 존재한다.
- 완전 비밀성(perfect secrecy). $t-1$ 개 이하의 조각의 분포는 $s$ 와 무관하다.

## Shamir 방식

**Shamir 비밀 분산(Shamir secret sharing)** 은 소수 $p\gt n$ 에 대해 유한체 $\mathbb F\_p$ 에서 다음과 같이 한다[^1].

1. 분배자가 $a\_1,\dots,a\_{t-1}\in\mathbb F\_p$ 를 무작위로 골라 $f(x)=s+a\_1x+\cdots+a\_{t-1}x^{t-1}$ 을 정한다.
2. 사람 $i$ 에게 조각 $\sigma\_i=f(i)$ 를 준다.
3. 조각 $f(x\_1),\dots,f(x\_t)$ 를 모은 사람들은 Lagrange 보간으로 $s=f(0)$ 을 계산한다.

$$
s=\sum\_{i=1}^{t}f(x\_i)\prod\_{j\ne i}\frac{x\_j}{x\_j-x\_i}
$$

# 성질

## 완전 비밀성

Shamir 방식에서 $t-1$ 개의 조각은 $s$ 와 독립으로 균등하게 분포한다.

증명의 요지. 점 $t$ 개를 지나는 차수 $t-1$ 이하 다항식은 유일하다. 그래서 서로 다른 $t-1$ 개의 점 $x\_1,\dots,x\_{t-1}$ 과 임의의 후보 $s'$ 에 대해, 차수 $t-1$ 이하이고 $f(0)=s'$ 이며 주어진 $t-1$ 개 값을 지나는 다항식은 정확히 하나다. 그래서 $(a\_1,\dots,a\_{t-1})\mapsto(f(x\_1),\dots,f(x\_{t-1}))$ 은 $s$ 마다 $\mathbb F\_p^{t-1}$ 의 전단사이고, 계수가 균등하면 조각도 균등하다.

## 조각의 크기

완전 비밀성을 가진 문턱 방식에서 각 조각이 가질 수 있는 값의 수는 비밀이 가질 수 있는 값의 수 이상이다[^3]. $t-1$ 명의 조각을 고정하면 비밀의 모든 값이 여전히 가능하고, 남은 한 명의 조각이 그 값을 정하므로 조각의 값이 비밀의 값보다 적을 수 없다. Shamir 방식은 조각과 비밀이 모두 $\mathbb F\_p$ 의 원소이므로 이 하한에 닿는다.

## 선형성

비밀 $s$, $s'$ 의 Shamir 조각을 사람마다 더하면 다항식 $f+f'$ 의 값이므로 $s+s'$ 의 조각이 된다. 상수배도 같다. 두 조각을 곱하면 차수가 $2(t-1)$ 인 다항식의 값이 되므로, $n\ge 2t-1$ 이면 곱의 조각도 복원 가능하고 차수를 다시 낮추는 단계를 거쳐 계산을 이어 간다. 이 성질로 정직한 참가자가 $2/3$ 을 넘으면 임의의 함수를 조각 위에서 계산하는 다자간 계산(secure multiparty computation)이 구성된다[^4].

## Reed–Solomon 부호와의 관계

Shamir 조각 $(f(1),\dots,f(n))$ 은 [오류정정부호](error-correcting-codes.md)의 Reed–Solomon 부호어다. 그래서 조각 가운데 $e$ 개가 거짓이어도 $n\ge t+2e$ 이면 복호 알고리즘으로 $f$ 와 $s$ 를 복원한다[^5].

## 검증 가능한 비밀 분산

분배자가 거짓 조각을 줄 수 있으면 조각을 받은 사람이 확인할 수단이 필요하다. Feldman 방식은 위수 $q$ 인 군에서 계수의 거듭제곱 $g^s,g^{a\_1},\dots,g^{a\_{t-1}}$ 을 공개하고, 사람 $i$ 는 다음을 검사한다[^6].

$$
g^{\sigma\_i}=g^s\prod\_{j=1}^{t-1}\bigl(g^{a\_j}\bigr)^{i^j}
$$

$g^s$ 가 공개되므로 비밀성은 [이산로그](discrete-logarithm.md) 가정에 기댄다. 공개값을 [약속 방식](commitment-schemes.md)의 Pedersen 약속으로 바꾸면 완전 비밀성이 유지된다.

# 활용

- 문턱 서명과 키 관리. [전자서명](digital-signatures.md)의 비밀키를 Shamir 조각으로 나눠 여러 서버에 두고, $t$ 대가 협력할 때만 서명을 만든다. 비밀키는 한 자리에 모이지 않는다.
- 다자간 계산. 선형성 절의 구성으로 여러 기관이 각자의 입력을 감춘 채 합계나 통계를 계산한다.
- 분산 저장. 데이터를 Reed–Solomon 조각으로 나눠 여러 저장소에 두면 일부 저장소를 잃어도 복원되고, 문턱 미만의 저장소는 내용을 알지 못한다.
- [중국인의 나머지 정리](chinese-remainder-theorem.md)를 쓰는 Mignotte 방식은 다항식 대신 서로 소인 법들에 대한 나머지를 조각으로 준다.

[^1]: A. Shamir, "How to share a secret", Communications of the ACM 22 (1979), 612–613.
[^2]: G. R. Blakley, "Safeguarding cryptographic keys", AFIPS National Computer Conference 1979, 313–317.
[^3]: E. D. Karnin, J. W. Greene, M. E. Hellman, "On secret sharing systems", IEEE Transactions on Information Theory 29 (1983), 35–41.
[^4]: M. Ben-Or, S. Goldwasser, A. Wigderson, "Completeness theorems for non-cryptographic fault-tolerant distributed computation", STOC 1988, 1–10.
[^5]: R. J. McEliece, D. V. Sarwate, "On sharing secrets and Reed-Solomon codes", Communications of the ACM 24 (1981), 583–584.
[^6]: P. Feldman, "A practical scheme for non-interactive verifiable secret sharing", FOCS 1987, 427–438.

# 연관 문서

## 선수지식

- [유한체](finite-fields.md)
- [다항식 보간](polynomial-interpolation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #algebra #combinatorics
