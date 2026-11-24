# Thue–Morse 수열

# 개요

**Thue–Morse 수열(Thue–Morse sequence)** 은 $0$ 에서 시작해, 지금까지 쓴 문자열의 $0$ 과 $1$ 을 맞바꾼 것을 뒤에 붙이는 일을 끝없이 되풀이해 얻는 $0$ 과 $1$ 의 수열이다. $0$ 과 $1$ 로 끝없는 문자열을 쓰면서 같은 덩어리가 세 번 연달아 나오지 않게 하려고 한다. $000$ 이나 $010101$ 처럼 덩어리가 세 번 이어지는 것을 피해 한 글자씩 골라 나가면, 앞에서 고른 글자 때문에 다음 글자를 고를 수 없게 되는 일이 생긴다.

Thue–Morse 수열은 이 문제를 한 번에 푼다. 처음 몇 글자가 $0110100110010110$ 이고, 이 문자열은 어디까지 써도 같은 덩어리가 세 번 연달아 나오지 않는다.

# 직관

$0$ 에 $1$ 을 붙여 $01$, 그 뒤에 $01$ 을 맞바꾼 $10$ 을 붙여 $0110$, 다시 $1001$ 을 붙여 $01101001$ 을 얻는다. 한 번 더 하면 다음 열여섯 글자가 된다.

$$
0110100110010110
$$

길이가 두 배가 될 때마다 앞의 절반은 그대로 남으므로, 끝없는 수열 하나가 정해진다.

같은 수열을 글자마다 따로 구할 수도 있다. $n$ 번째 글자($n=0,1,2,\dots$)는 $n$ 을 이진법으로 쓴 숫자 가운데 $1$ 의 개수가 짝수이면 $0$, 홀수이면 $1$ 이다. $n=5$ 는 $101$ 이고 $1$ 이 둘이므로 $0$, $n=7$ 은 $111$ 이고 $1$ 이 셋이므로 $1$ 이다. 앞의 절반에 $2^k$ 을 더하면 이진법의 맨 앞에 $1$ 이 하나 붙어 짝홀이 바뀌므로, 두 만드는 법이 같은 수열을 준다.

반복을 보면, $0110$ 에는 $11$ 이 있으므로 같은 덩어리가 두 번 이어지는 것은 피하지 못한다. 실제로 $0$ 과 $1$ 로 된 길이 $4$ 의 문자열은 모두 어떤 덩어리가 두 번 이어지는 부분을 갖는다. 세 번 이어지는 것은 Thue–Morse 수열이 피한다.

# 정의

$s_2(n)$ 을 $n$ 의 이진 전개의 숫자 합으로 둔다. Thue–Morse 수열 $(t_n)\_{n\ge 0}$ 은 다음이다.

$$
t_n=s_2(n)\bmod 2
$$

$t_0=0$, $t_1=1$, $t_2=1$, $t_3=0$ 이고, 직관 절의 열여섯 글자가 $t_0$ 부터 $t_{15}$ 까지다. 같은 수열을 $t_0=0$ 과 다음 두 식으로도 정한다.

$$
t_{2n}=t_n,\qquad t_{2n+1}=1-t_n
$$

글자를 낱말로 바꾸는 규칙 $\mu(0)=01$, $\mu(1)=10$ 을 **Thue–Morse 치환(Thue–Morse morphism)** 이라 한다. $\mu$ 를 $0$ 에 거듭 적용한 $0$, $01$, $0110$, $01101001$ 은 직관 절에서 만든 문자열들이고, 수열은 이 문자열들의 극한이다.

문자열 $u$ 에 대해 $uu$ 를 **제곱(square)**, $uuu$ 를 **세제곱(cube)** 이라 한다. 글자 $a$ 와 문자열 $x$ 로 된 $axaxa$ 꼴을 **겹침(overlap)** 이라 한다. $11$ 과 $0101$ 은 제곱이고 $10101$ 은 $a=1$, $x=0$ 인 겹침이다.

# 성질

## 겹침이 없음

Thue–Morse 수열에는 겹침이 없고, 따라서 세제곱도 없다.[^1]

증명의 요지. 겹침 $axaxa$ 가 있다고 하고 그 가운데 가장 짧은 것을 고른다. 수열은 $01$ 과 $10$ 의 블록으로 나뉘고, 블록 안에서 같은 글자가 이어지지 않는다는 것으로 $x$ 의 길이가 홀수인 경우를 배제한다. 짝수이면 겹침이 블록의 경계에 맞추어 놓이고, $\mu$ 를 거꾸로 적용하면 길이가 절반쯤인 겹침이 수열에 나타나 가장 짧다는 선택과 어긋난다.

## 세 글자의 제곱 없는 수열

Thue–Morse 수열에서 연이은 두 $0$ 사이에 있는 $1$ 의 개수를 차례로 적으면 다음 수열이 된다.

$$
2102012101202102012\cdots
$$

이 수열은 $0,1,2$ 세 글자로 되어 있고 제곱이 없다.[^1] 두 글자로는 제곱을 피할 수 없으므로 세 글자가 제곱을 피하는 가장 작은 경우다. $111$ 은 세제곱이므로 사이의 $1$ 은 많아야 둘이다.

## Prouhet 의 분할

$0$ 부터 $2^{k+1}-1$ 까지의 정수를 $t_n=0$ 인 것과 $t_n=1$ 인 것으로 나누면, 두 묶음에서 $j$ 제곱의 합이 $j=0,1,\dots,k$ 에 대해 같다.[^2] $k=2$ 이면 두 묶음은 $\lbrace 0,3,5,6\rbrace$ 과 $\lbrace 1,2,4,7\rbrace$ 이고 다음이 성립한다.

$$
0+3+5+6=1+2+4+7=14,\qquad 0^2+3^2+5^2+6^2=1^2+2^2+4^2+7^2=70
$$

증명의 요지. $\sum_n(-1)^{t_n}x^n=\prod_{i=0}^{k}(1-x^{2^i})$ 이고, 오른쪽은 $x=1$ 에서 $k+1$ 중근을 갖는다. $x\frac{d}{dx}$ 를 $j\le k$ 번 적용하고 $x=1$ 을 넣으면 $\sum_n(-1)^{t_n}n^j=0$ 이 나온다.

## 유한 오토마타로 만드는 수열

상태가 둘인 [유한 오토마타](finite-automata.md)가 $n$ 의 이진 전개를 읽으면서 $1$ 을 읽을 때마다 상태를 바꾸면, 끝난 상태가 $t_n$ 이다. 이처럼 $n$ 의 $k$ 진 전개를 읽는 유한 오토마타의 출력으로 얻는 수열을 **$k$-자동 수열($k$-automatic sequence)** 이라 하고, Thue–Morse 수열은 $2$-자동 수열이다.

Cobham 은 $k$ 와 $l$ 이 같은 수의 거듭제곱이 아닐 때 $k$-자동이면서 $l$-자동인 수열은 어느 자리부터 주기적임을 보였다.[^3] Thue–Morse 수열은 주기적이 아니므로 $3$-자동 수열이 아니다.

## Thue–Morse 상수

다음 수를 Thue–Morse 상수(Thue–Morse constant)라 한다.

$$
\tau=\sum_{n\ge 0}\frac{t_n}{2^{n+1}}=0.0110100110010110\cdots_{(2)}=0.4124540336\cdots
$$

Mahler 는 $\tau$ 가 [초월수](transcendental-numbers.md)임을 보였다.[^4] 증명은 생성함수 $f(x)=\sum(-1)^{t_n}x^n$ 이 함수방정식 $f(x)=(1-x)f(x^2)$ 를 만족한다는 것을 쓴다.

# 활용

- 공정한 차례. 두 사람이 번갈아 물건을 고를 때 $ABABAB$ 순서는 먼저 고르는 쪽에 유리하다. Thue–Morse 순서 $ABBABAAB$ 는 Prouhet 의 분할에서 $k$ 차까지의 거듭제곱 합이 같다는 성질로 그 유리함을 줄인다.
- [Lyndon 단어](lyndon-words.md). 둘 다 문자열의 조합론에 속하고, 문자열을 반복과 순환 이동으로 분류하는 문제에서 Thue–Morse 수열은 반복을 피하는 극단적인 예다.
- 측지선의 기호역학. Morse 는 음의 곡률을 갖는 곡면에서 주기적이지 않으면서 되풀이해 돌아오는 측지선을 만들 때 이 수열을 썼다.[^5]
- [초월수](transcendental-numbers.md). 자동 수열의 숫자로 만든 무리수는 초월수라는 것이 Adamczewski 와 Bugeaud 의 정리이고, Mahler 의 결과는 그 특별한 경우다.[^6]

[^1]: A. Thue, "Über die gegenseitige Lage gleicher Teile gewisser Zeichenreihen", *Skrifter udgivne af Videnskabs-Selskabet i Christiania, I. Mathematisk-naturvidenskabelig Klasse* 1912, No. 1, pp. 1–67.
[^2]: J.-P. Allouche, J. Shallit, "The ubiquitous Prouhet–Thue–Morse sequence", *Sequences and Their Applications*, Springer, 1999, pp. 1–16.
[^3]: A. Cobham, "On the base-dependence of sets of numbers recognizable by finite automata", *Mathematical Systems Theory* 3, 1969, pp. 186–192.
[^4]: K. Mahler, "Arithmetische Eigenschaften der Lösungen einer Klasse von Funktionalgleichungen", *Mathematische Annalen* 101, 1929, pp. 342–366.
[^5]: M. Morse, "Recurrent geodesics on a surface of negative curvature", *Transactions of the American Mathematical Society* 22, 1921, pp. 84–100.
[^6]: B. Adamczewski, Y. Bugeaud, "On the complexity of algebraic numbers I. Expansions in integer bases", *Annals of Mathematics* 165, 2007, pp. 547–565.

# 연관 문서

## 선수지식

- [유한 오토마타](finite-automata.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #computation #number_theory
